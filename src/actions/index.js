import {
  FLIP_CARD,
  SET_FORM_INPUT_ERROR
} from "../utils";

export const flipCard = () => {
  return {
    type: FLIP_CARD
  };
}

export const setFormInputStatus = () => {
  return {
    type: SET_FORM_INPUT_ERROR,
    // payload: 
  };
}