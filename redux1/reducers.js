import { SHOW_MESSAGE } from './actions';

const initialState = {
  message: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;