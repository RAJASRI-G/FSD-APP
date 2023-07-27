import React, { useState } from 'react';
import { connect } from 'react-redux';
import { showMessage } from './actions';

const FeedbackForm = ({ showMessage }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (feedback.trim() === '') {
      return; // Don't submit empty feedback
    }
    showMessage('Thank you for your feedback!'); // Dispatch the action to show the message
    setFeedback(''); // Clear the feedback input field after submission
  };

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="feedback" style={styles.label}>
          Feedback:
        </label>
        <input
          type="text"
          id="feedback"
          value={feedback}
          onChange={handleInputChange}
          placeholder="Enter your feedback..."
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  input: {
    padding: '10px',
    fontSize: '1rem',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

const mapDispatchToProps = {
  showMessage,
};

export default connect(null, mapDispatchToProps)(FeedbackForm);
