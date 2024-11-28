import { useState } from "react";

export default function ControlledComponent(props) {
  // const [formData, setFormData]

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    const value = event.target.value;

    if (value.length < 5) {
      setPassword(value);
    }
  };

  return (
    <form>
      <input
        type="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
        type="password"
        name="password"
        onChange={handlePasswordChange}
        value={password}
      />
      <button>Submit</button>
    </form>
  );
}
