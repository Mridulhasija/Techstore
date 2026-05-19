import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";

const Login = ({ onClose }) => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");
const handleLogin = async (e) => {
e.preventDefault();
try {
setLoading(true);
setError("");
const response = await axios.post(
`${import.meta.env.VITE_API_URL}/api/auth/login`,
{
email,
password,
}
);
localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));
alert("Login successful");
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
<h2>Welcome Back</h2>
<p className="auth-subtitle">
Login to continue shopping
</p>      
<form onSubmit={handleLogin}>
<input
type="email"
placeholder="Enter your email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<input
type="password"
placeholder="Enter your password"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
/>
{error && <p className="error-msg">{error}</p>}
<button type="submit" disabled={loading}>
{loading ? "Logging in..." : "Sign In"}
</button>
</form>
</div>
);
};
export default Login;
