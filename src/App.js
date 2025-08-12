import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Success from "./components/Success";

function App() {
  const [page, setPage] = useState("login");
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "1234") {
      setPage("register");
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRegister = (userData) => {
    setCurrentUser(userData);
    setPage("success");
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setPage("login");
  };

  const handleBack = () => {
    setPage("register");
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "50px" }}>
      {page === "login" && <LoginForm onLogin={handleLogin} />}
      {page === "register" && <RegisterForm onRegister={handleRegister} />}
      {page === "success" && (
        <Success onLogout={handleLogout} onBack={handleBack} user={currentUser} />
      )}
    </div>
  );
}

export default App;
