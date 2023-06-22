import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function nameHandler(e) {
    setName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function messageHandler(e) {
    setMessage(e.target.value);
  }

  function handleSendEmail(e) {
    e.preventDefault()
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    const mailtoUrl = `mailto:avijitdam003@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    console.log(handleSendEmail)
  }
  

  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>

        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              placeholder="Abc"
              value={name}
              onChange={nameHandler}
            />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              required
              placeholder="abc@xyz.com"
              value={email}
              onChange={emailHandler}
            />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              required
              placeholder="Tell us about your query..."
              value={message}
              onChange={messageHandler}
            ></textarea>
          </div>

          <button type="button" onClick={handleSendEmail}>
            Send
          </button>
        </form>
      </main>
    </div>
  );
};

export default Contact;
