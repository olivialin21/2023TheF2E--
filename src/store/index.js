import useReducerWithThunk from "use-reducer-thunk";
import { createContext } from "react";

import {
  FLIP_CARD,
  SET_FORM_INPUT_ERROR,
  RESET_FORM_INPUT_ERROR,
  SET_CASE,
  RESET_CASE,
  SET_FORM_ERROR
} from "../utils";

export const StoreContext = createContext();
const initialState = {
  donation: {
    card: {
      isFlipped: false,
      caseName: "",
      caseMoney: ""
    }
  },
  email: {
    formInputError: {
      name: false,
      email: false,
      tel: false,
      message: false,
    },
    formError: false,
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
    case SET_CASE:
      return {
        ...state,
        donation: {
          ...state.donation,
          card: {
            ...state.donation.card,
            caseName: action.payload.caseName,
            caseMoney: action.payload.caseMoney,
          }
        }
      };
    case RESET_CASE:
      return {
        ...state,
        donation: {
          ...state.donation,
          card: {
            ...state.donation.card,
            caseName: "",
            caseMoney: "",
          }
        }
      }
    case SET_FORM_INPUT_ERROR:
      return {
        ...state,
        email: {
          ...state.email,
          formInputError: action.payload
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
    case SET_FORM_ERROR:
      return {
        ...state,
        email: {
          ...state.email,
          formError: action.payload
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