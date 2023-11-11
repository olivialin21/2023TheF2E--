import useReducerWithThunk from "use-reducer-thunk";
import { createContext } from "react";

import {
  FLIP_CARD
} from "../utils";

export const StoreContext = createContext();
const initialState = {
  card: {
    isFlipped: false,
  }
}

function reducer(state, action) {
  switch (action.type) {
    case FLIP_CARD:
      return {
        ...state,
        card: {
          isFlipped: !state.card.isFlipped
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