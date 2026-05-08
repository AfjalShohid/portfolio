import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading font-semibold md:font-bold">
        Get In Touch
      </h1>
      <div className="text-center pt-10">
        <h3 className="text-center text-xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-5 md:pt-0 md:pb-6">
          <a href={`mailto:${email}`}>{email}</a>
        </h3>
        <h3 className="text-center text-xl md:text-3xl lg:text-4xl text-gradient font-semibold md:font-bold pt-5 md:pt-5 md:pb-6">
          <a href={`tel:${phone}`}>{phone}</a>
        </h3>
      </div>
    </main>
  );
}

export default Contact;
