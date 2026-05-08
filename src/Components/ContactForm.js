import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ email }) => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState("");

  // Initialize EmailJS with your public key
  React.useEffect(() => {
    emailjs.init("UGb6uIPKGqDiPmkor"); // Public key for EmailJS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name");
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      return false;
    }
    if (!formData.subject.trim()) {
      setErrorMessage("Please enter a subject");
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please write a message");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        "service_jxj52yo", // Service ID
        "template_djqlkp3", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: email,
        }
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error.text || "Failed to send message. Please try again."
      );
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label className="block text-sm font-medium text-content mb-2">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition duration-300"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-content mb-2">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition duration-300"
          />
        </div>

        {/* Subject Input */}
        <div>
          <label className="block text-sm font-medium text-content mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What is this about?"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition duration-300"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label className="block text-sm font-medium text-content mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            rows="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border-2 border-gray-700 focus:border-blue-500 focus:outline-none transition duration-300 resize-none"
          />
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="p-4 rounded-lg bg-red-500 bg-opacity-20 border-2 border-red-500 text-red-200">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className={`w-full px-6 py-3 rounded-lg font-semibold transition duration-300 ${
            status === "success"
              ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
              : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
          } ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {status === "loading" ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : status === "success" ? (
            <span className="flex items-center justify-center">
              <svg
                className="h-5 w-5 mr-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Message Sent!
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
