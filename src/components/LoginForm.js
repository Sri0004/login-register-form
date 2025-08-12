import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "320px",
      margin: "80px auto",
      padding: "25px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #e3f2fd, #ffffff)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      fontFamily: "Arial, sans-serif",
    },
    title: { 
      textAlign: "center", 
      marginBottom: "20px", 
      color: "#1565c0", 
      fontSize: "22px",
      fontWeight: "bold"
    },
    input: {
      margin: "10px 0",
      padding: "12px",
      fontSize: "15px",
      borderRadius: "6px",
      border: "1px solid #90caf9",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      border: "1px solid #1565c0",
      boxShadow: "0 0 6px rgba(21,101,192,0.4)",
    },
    button: {
      padding: "12px",
      background: "#1565c0",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "12px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#0d47a1",
    },
    
  };

  const [focusField, setFocusField] = useState("");
  const [hoverButton, setHoverButton] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h2 style={styles.title}>Login</h2>

      <input
        type="text"
        placeholder="Username (admin)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onFocus={() => setFocusField("username")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "username" ? styles.inputFocus : {}),
        }}
        required
      />

      <input
        type="password"
        placeholder="Password (1234)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onFocus={() => setFocusField("password")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "password" ? styles.inputFocus : {}),
        }}
        required
      />

      <button
        type="submit"
        style={{
          ...styles.button,
          ...(hoverButton ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setHoverButton(true)}
        onMouseLeave={() => setHoverButton(false)}
      >
        Login
      </button>
    </form>
  );
}


export default LoginForm;
