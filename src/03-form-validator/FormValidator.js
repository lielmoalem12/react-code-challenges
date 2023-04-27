import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const validateFields = () => {
    if (!email || !password || !passwordConfirm) {
      return "All fields are required";
    } else if (!email.includes("@")) {
      return "Email must contain @";
    } else if (password.length < 8) {
      return "Password must be at least 8 characters";
    } else if (password !== passwordConfirm) {
      return "Passwords must match";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateFields();
    if (error) {
      alert(error);
    } else {
      alert("Success!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
