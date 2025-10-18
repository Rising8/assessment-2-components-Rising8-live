import React, { useState } from "react";

// Simple contact form data model
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Tracks if form is submitted yet, if it has show a confirmation message
  const [submitted, setSubmitted] = useState(false);

  // Handles field changes dynamically
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handles form submission 
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Form submitted:", formData); // temporary feedback
    setSubmitted(true); // success message
    setFormData({ name: "", email: "", subject: "", message: "" }); // form reset
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="main col-sm-12">
            <h1 className="section-title">Contact Us</h1>

            {/* Show confirmation message */}
            {submitted ? (
                <div className="alert alert-success">
                <strong>Thank you!</strong> Your message has been sent.
                </div>
            ) : (
                // Contact Form, value is linked to state and onChange updates the state dynamically
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* Name */}
                        <label htmlFor="name">Name:</label>
                        <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        {/* Email */}
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        {/* Subject */}
                        <label htmlFor="subject">Subject:</label>
                        <input
                        type="text"
                        className="form-control"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        />
                    </div>

                    <div className="form-group">
                        {/* Message */}
                        <label htmlFor="message">Message:</label>
                        <textarea
                        className="form-control"
                        id="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        ></textarea>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
