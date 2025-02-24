import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const validInviteCodes = ["austin234", "alvin145", "karthik321"];

const ListRegistration = ({ addToWaitlist }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        navigate("/waitlist");
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const isValidCode = validInviteCodes.includes(inviteCode);
      const user = { name, inviteCode: isValidCode ? inviteCode : null };
      addToWaitlist(user);
      if (!isValidCode && inviteCode) {
        setMessage("Invalid invite code.   You have been placed at the back of the general waitlist.");
      } else {
        setMessage("");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div className="form-container">
        <div className="logo-container">
          <img src="/logo.png" alt="App Logo" className="app-logo" />
        </div>
        <h2>List Registration</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Enter invite code (if available)"
            value={inviteCode}
            onChange={(e) => setInviteCode(e.target.value)}
          />
          <button type="submit" disabled={loading} className="view-button">
            {loading ? "Joining..." : "Join List"}
          </button>
        </form>
        <button onClick={() => navigate("/waitlist")} className="view-button">View Waitlist</button>
        <p className="trademark-line">Lyft and the Lyft logo are
          trademarks of Lyft, Inc.</p>
      </div>
      {message && <div className="message-container">
        <p className="error-message">{message}</p>
      </div>}
    </>
  );
};

export default ListRegistration;
