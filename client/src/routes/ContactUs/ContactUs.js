import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from "mdb-react-ui-kit";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    sendCopy: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <form
      id="form"
      className="text-center"
      style={{ width: "100%", maxWidth: "300px" }}
      onSubmit={handleSubmit}
    >
      <h2>Contact us</h2>

      <MDBInput
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        wrapperClass="mb-4"
      />

      <MDBInput
        type="email"
        label="Email address"
        name="email"
        value={formData.email}
        onChange={handleChange}
        wrapperClass="mb-4"
      />

      <MDBInput
        label="Subject"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        wrapperClass="mb-4"
      />

      <MDBTextArea
        label="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        wrapperClass="mb-4"
      />

      <MDBCheckbox
        name="sendCopy"
        checked={formData.sendCopy}
        onChange={handleChange}
        wrapperClass="d-flex justify-content-center"
        label="Send me a copy"
      />

      <MDBBtn color="primary" block className="my-4" type="submit">
        Send
      </MDBBtn>
    </form>
  );
}
