import React from "react";
import "./AuthModal.css";
const AuthModal = ({ isOpen, onClose, children }) => {
if (!isOpen) return null;
return (
<div className="auth-overlay" onClick={onClose}>
<div
className="auth-modal"
onClick={(e) => e.stopPropagation()}
>
<button className="close-btn" onClick={onClose}>
×
</button>
{children}
</div>
</div>
  );
};
export default AuthModal;
