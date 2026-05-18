import { useState } from "react";
import { useAuth }  from "../context/AuthContext";
import { useToast } from "../hooks/useToast";

function AuthModal({ onClose }) {
  const [tab,      setTab]      = useState("login");   // "login" | "register"
  const [name,     setName]     = useState("");
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");
  const [busy,     setBusy]     = useState(false);

  const { login, register } = useAuth();
  const showToast = useToast();

  const handleSubmit = async () => {
    setError("");
    setBusy(true);
    try {
      if (tab === "login") {
        await login(email, password);
        showToast("Welcome back! 👋");
      } else {
        await register(name, email, password);
        showToast("Account created! 🎉");
      }
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-logo">tech<span>store</span></div>

        <div className="modal-tabs">
          <button
            className={`modal-tab${tab === "login" ? " active" : ""}`}
            onClick={() => { setTab("login"); setError(""); }}
          >Sign In</button>
          <button
            className={`modal-tab${tab === "register" ? " active" : ""}`}
            onClick={() => { setTab("register"); setError(""); }}
          >Create Account</button>
        </div>

        {tab === "register" && (
          <div className="modal-field">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="modal-field">
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="modal-field">
          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
        </div>

        {error && <div className="modal-error">{error}</div>}

        <button
          className="btn-primary modal-submit"
          onClick={handleSubmit}
          disabled={busy}
        >
          {busy ? "Please wait…" : tab === "login" ? "Sign In →" : "Create Account →"}
        </button>
      </div>
    </div>
  );
}

export default AuthModal;
