import React, { useState } from "react";

function RegisterForm({ onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    dept: "",
  });

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      width: "340px",
      margin: "60px auto",
      padding: "25px",
      borderRadius: "12px",
      background: "linear-gradient(135deg, #e8f5e9, #ffffff)",
      boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#2e7d32",
      fontSize: "22px",
      fontWeight: "bold",
    },
    input: {
      margin: "10px 0",
      padding: "12px",
      fontSize: "15px",
      borderRadius: "6px",
      border: "1px solid #a5d6a7",
      outline: "none",
      transition: "0.3s",
    },
    inputFocus: {
      border: "1px solid #2e7d32",
      boxShadow: "0 0 6px rgba(46,125,50,0.4)",
    },
    button: {
      padding: "12px",
      background: "#2e7d32",
      color: "white",
      fontSize: "16px",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "12px",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      background: "#1b5e20",
    },
  };

  const [focusField, setFocusField] = useState("");
  const [hoverButton, setHoverButton] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h2 style={styles.title}>Registration Form</h2>

      <input
        name="name"
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        onFocus={() => setFocusField("name")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "name" ? styles.inputFocus : {}),
        }}
        required
      />

      <input
        name="dob"
        type="date"
        value={formData.dob}
        onChange={handleChange}
        onFocus={() => setFocusField("dob")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "dob" ? styles.inputFocus : {}),
        }}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        onFocus={() => setFocusField("email")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "email" ? styles.inputFocus : {}),
        }}
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        onFocus={() => setFocusField("phone")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "phone" ? styles.inputFocus : {}),
        }}
        required
      />

      <select
        name="dept"
        value={formData.dept}
        onChange={handleChange}
        onFocus={() => setFocusField("dept")}
        onBlur={() => setFocusField("")}
        style={{
          ...styles.input,
          ...(focusField === "dept" ? styles.inputFocus : {}),
        }}
        required
      >
        <option value="">Select Department</option>
        <option value="CSE">CSE</option>
        <option value="IT">IT</option>
        <option value="ECE">ECE</option>
        <option value="EEE">EEE</option>
      </select>

      <button
        type="submit"
        style={{
          ...styles.button,
          ...(hoverButton ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setHoverButton(true)}
        onMouseLeave={() => setHoverButton(false)}
      >
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
