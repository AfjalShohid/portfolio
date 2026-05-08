import React from "react";
import { contactDetails } from "../Details";
import ContactForm from "../Components/ContactForm";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      <section className="text-center mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-6xl text-dark-heading font-semibold md:font-bold mb-6">
          Get In Touch
        </h1>
        <p className="text-content text-lg mb-8 max-w-2xl mx-auto">
          Have a question or want to collaborate? Fill out the form below and I'll get back to you as soon as possible!
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm email={email} />

      {/* Additional Contact Info */}
      <section className="mt-16 pt-12 border-t border-gray-700">
        <h2 className="text-2xl text-gradient text-dark-heading font-semibold mb-8 text-center">
          Or reach out directly
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700">
            <h3 className="text-lg font-semibold text-gradient mb-3">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-content hover:text-gradient transition duration-300 break-all"
            >
              {email}
            </a>
          </div>
          <div className="text-center p-6 rounded-lg bg-gray-900 bg-opacity-50 border border-gray-700">
            <h3 className="text-lg font-semibold text-gradient mb-3">Phone</h3>
            <a
              href={`tel:${phone}`}
              className="text-content hover:text-gradient transition duration-300"
            >
              {phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
