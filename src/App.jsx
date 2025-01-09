import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subject: [],
    resume: null,
    url: "",
    choice: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
     setFormData((prev) => ({ ...prev,subject: checked ? [...prev.subject, value]
          : prev.subject.filter((sub) => sub !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, resume: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      contact: "",
      gender: "",
      subject: [],
      resume: null,
      url: "",
      choice: "",
      about: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data:", formData); // Log the form data to the console
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>React form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name*</label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name*</label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Contact*</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter Mobile number"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Gender*</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
 <input type="radio"name="gender"value="Female"onChange={handleChange}/>{" "}Female
<input type="radio"name="gender"value="Other"onChange={handleChange}
            />{" "}
            Other
          </div>
        </div>
        <div className="form-group">
          <label>Your best Subject</label>
          <div>
            <input
              type="checkbox"
              name="subject"
              value="English"
              onChange={handleChange}
            />{" "}
            English
            <input
              type="checkbox"
              name="subject"
              value="Maths"
              onChange={handleChange}
            />{" "}
            Maths
            <input
              type="checkbox"
              name="subject"
              value="Physics"
              onChange={handleChange}
            />{" "}
            Physics
          </div>
        </div>
        <div className="form-group">
          <label>Upload Resume*</label>
          <input
            type="file"
            name="resume"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Enter URL*</label>
          <input
            type="url"
            name="url"
            placeholder="Enter URL"
            value={formData.url}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Select your choice</label>
          <select
            name="choice"
            value={formData.choice}
            onChange={handleChange}
            required
          >
            <option value="">Select your Ans</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>About</label>
          <textarea
            name="about"
            placeholder="About your self"
            value={formData.about}
            onChange={handleChange}
          />
        </div>
        <div className="form-buttons">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
