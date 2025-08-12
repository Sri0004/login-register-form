import React, { useState } from "react";

function Success({ onLogout, onBack, user }) {
  const styles = {
    container: {
      width: "360px",
      margin: "80px auto",
      padding: "25px",
      textAlign: "center",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      fontFamily: "Arial, sans-serif",
    },
    message: {
      fontSize: "20px",
      color: "#00796b",
      marginBottom: "15px",
      fontWeight: "bold",
    },
    userText: {
      fontSize: "18px",
      marginBottom: "25px",
      color: "#004d40",
    },
    button: {
      padding: "12px 18px",
      fontSize: "15px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      margin: "6px",
      transition: "all 0.3s ease",
    },
    logoutBtn: {
      background: "#e53935",
      color: "white",
    },
    logoutBtnHover: {
      background: "#b71c1c",
    },
    backBtn: {
      background: "#546e7a",
      color: "white",
    },
    backBtnHover: {
      background: "#37474f",
    },
  };

  const [hoveredBtn, setHoveredBtn] = useState("");

  return (
    <div style={styles.container}>
      <h2 style={styles.message}>You are successfully registered!</h2>
      {user && <p style={styles.userText}>Welcome, {user.name}</p>}

      <button
        onClick={onLogout}
        onMouseEnter={() => setHoveredBtn("logout")}
        onMouseLeave={() => setHoveredBtn("")}
        style={{
          ...styles.button,
          ...styles.logoutBtn,
          ...(hoveredBtn === "logout" ? styles.logoutBtnHover : {}),
        }}
      >
        Logout
      </button>

      <button
        onClick={onBack}
        onMouseEnter={() => setHoveredBtn("back")}
        onMouseLeave={() => setHoveredBtn("")}
        style={{
          ...styles.button,
          ...styles.backBtn,
          ...(hoveredBtn === "back" ? styles.backBtnHover : {}),
        }}
      >
        Back
      </button>
    </div>
  );
}

export default Success;
