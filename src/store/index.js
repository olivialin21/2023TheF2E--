import useReducerWithThunk from "use-reducer-thunk";
import { createContext } from "react";

import {
  FLIP_CARD,
  SET_FORM_INPUT_ERROR,
  RESET_FORM_INPUT_ERROR
} from "../utils";

export const StoreContext = createContext();
const initialState = {
  donation: {
    card: {
      isFlipped: false,
    }
  },
  email: {
    formInputError: {
      name: false,
      email: false,
      tel: false,
      message: false,
    },
    modal: {
      show: false,
    }
  }
}

function reducer(state, action) {
  switch (action.type) {
    case FLIP_CARD:
      return {
        ...state,
        donation: {
          ...state.donation,
          card: {
            ...state.donation.card,
            isFlipped: !state.donation.card.isFlipped
          }
        }
      };
    case SET_FORM_INPUT_ERROR:
      return {
        ...state,
        email: {
          ...state.email,
          formInputError: {
            ...state.email.formInputError,
            [action.payload]: true
          }
        }
      };
    case RESET_FORM_INPUT_ERROR:
      return {
        ...state,
        email: {
          ...state.email,
          formInputError: {
            name: false,
            email: false,
            tel: false,
            message: false,
          }
        }
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(reducer, initialState, "example")
  const value = { state, dispatch };

  return (
    <StoreContext.Provider value={value}>
      {props.children}
    </StoreContext.Provider>
  );
}