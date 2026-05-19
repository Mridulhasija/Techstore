import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const Register = ({ onClose }) => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleRegister = async (e) => {
e.preventDefault();
try {
setLoading(true);
setError("");
const response = await axios.post(
`${import.meta.env.VITE_API_URL}/api/auth/register`,
{
name,
email,
password,
}
);
localStorage.setItem("token", response.data.token);
localStorage.setItem("user", JSON.stringify(response.data.user));
alert("Account created successfully");
if (onClose) {
onClose();
}
window.location.reload();
} catch (err) {
setError(
err.response?.data?.error || "Something went wrong"
);
} finally {
setLoading(false);
}
};
return (
<div className="auth-container">
<h2>Create Account</h2>
<p className="auth-subtitle">
Join TechStore today
</p>
  <form onSubmit={handleRegister}>
<input
type="text"
placeholder="Enter your name"
value={name}
onChange={(e) => setName(e.target.value)}
required
/>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Create password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
{error && <p className="error-msg">{error}</p>}
<button type="submit" disabled={loading}>
{loading ? "Creating Account..." : "Create Account"}
</button>
</form>
</div>
);
};
export default Register;
