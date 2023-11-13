import {
  FLIP_CARD,
  SET_FORM_INPUT_ERROR,
  SET_CASE,
  RESET_CASE,
  SET_FORM_ERROR
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

export const setCase = (caseName, customizeMoney) => {
  console.log(caseName, customizeMoney);
  let caseObj = {};
  switch (caseName) {
    case "喵星人之友":
      caseObj = {
        caseName: "喵星人之友",
        caseMoney: "NT$600"
      }
      break;
    case "喵星大使":
      caseObj = {
        caseName: "喵星大使",
        caseMoney: "NT$6000"
      }
      break;
    case "喵星傳奇":
      caseObj = {
        caseName: "喵星傳奇",
        caseMoney: "NT$60000"
      }
      break;
    case "自訂金額":
      caseObj = {
        caseName: "喵立翰的支持者",
        caseMoney: "NT$"+customizeMoney
      }
      break;
    default:
      break;
  }
  return {
    type: SET_CASE,
    payload: caseObj
  }
}

export const resetCase = () => {
  return {
    type: RESET_CASE,
  }
}

export const setFormInputError = (errorObj) => {
  return {
    type: SET_FORM_INPUT_ERROR,
    payload: errorObj
  }
}

export const setFormError = ( status ) => {
  return {
    type: SET_FORM_ERROR,
    payload: status
  }
}