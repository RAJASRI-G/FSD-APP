// feedbackReducer.js
const initialState = {
    name: "",
    contactNumber: "",
    email: "",
    message: "",
  };
  
  const feedbackReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_NAME":
        return { ...state, name: action.payload };
      case "UPDATE_CONTACT_NUMBER":
        return { ...state, contactNumber: action.payload };
      case "UPDATE_EMAIL":
        return { ...state, email: action.payload };
      case "UPDATE_MESSAGE":
        return { ...state, message: action.payload };
      case "RESET_FEEDBACK_FORM":
        return initialState;
      default:
        return state;
    }
  };
  
  export default feedbackReducer;
  