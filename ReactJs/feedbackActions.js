// feedbackActions.js
export const updateName = (name) => ({
    type: "UPDATE_NAME",
    payload: name,
  });
  
  export const updateContactNumber = (contactNumber) => ({
    type: "UPDATE_CONTACT_NUMBER",
    payload: contactNumber,
  });
  
  export const updateEmail = (email) => ({
    type: "UPDATE_EMAIL",
    payload: email,
  });
  
  export const updateMessage = (message) => ({
    type: "UPDATE_MESSAGE",
    payload: message,
  });
  
  export const resetFeedbackForm = () => ({
    type: "RESET_FEEDBACK_FORM",
  });
  