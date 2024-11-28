import { useState } from "react";

export default function ControlledComponent(props) {
  const initialFormData = { email: "", password: "" };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { value, name } = event.target;

    if (name === "password" && value.length < 5) {
      setFormData({ ...formData, [name]: value });
    } else if (name !== "password") {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <form>
      <input type="email" name="email" onChange={handleChange} value={formData.email} />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={formData.password}
      />
      <button>Submit</button>
    </form>
  );
}
