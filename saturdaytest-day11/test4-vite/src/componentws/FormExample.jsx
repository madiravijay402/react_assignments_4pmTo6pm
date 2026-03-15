import { useState } from "react";

function FormExample() {

  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
      />

      <h3>Name: {form.name}</h3>
      <h3>Email: {form.email}</h3>
    </div>
  );
}

export default FormExample;