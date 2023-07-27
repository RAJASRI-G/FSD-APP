import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateContactNumber, updateEmail, updateMessage, resetFeedbackForm } from "./feedbackActions";
import "./contact.css";

const Form = () => {
  const { name, contactNumber, email, message } = useSelector((state) => state.feedback);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    dispatch(updateName(e.target.value));
  };

  const handleContactNumberChange = (e) => {
    dispatch(updateContactNumber(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(updateEmail(e.target.value));
  };

  const handleMessageChange = (e) => {
    dispatch(updateMessage(e.target.value));
  };

  const handleSubmit = () => {
    // You can handle form submission here, for example, send the data to a server
    // After submission, reset the form fields
    dispatch(resetFeedbackForm());
  };

  return (
    <div className="back">
      {/* Form content here */}
      <input
        className="input input-element"
        name="Name"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        className="input input-element"
        name="Contact Number"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={handleContactNumberChange}
      />
      <input
        className="input input-element"
        name="Email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <textarea
        className="textinput input-element"
        placeholder="Message"
        value={message}
        onChange={handleMessageChange}
      ></textarea>
      <button className="logb1" onClick={handleSubmit}>
        SEND
      </button>
    </div>
  );
};

export default Form;
