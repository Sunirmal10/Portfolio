import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [formvalue, setformvalue] = useState();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wqzgnyw",
        "template_19evrpf",
        form.current,
        "bjG5m4ALtqFGRDmG2"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    setformvalue("");
  };

  return (
    <div className="contact">
      <h3>Contact Me...</h3>
      <p>
        Please, feel free to contact me by submitting the form below. Thank you!
      </p>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="">
            Name:
            <input
              type="text"
              placeholder="Name"
              name="user_name"
              value={formvalue}
            />
          </label>
          <label htmlFor="">
            Email:
            <input
              type="text"
              placeholder="Email"
              name="user_email"
              value={formvalue}
            />
          </label>
          <label htmlFor="">
            Message:
            <textarea
              type="text"
              placeholder="Message"
              name="message"
              value={formvalue}
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
