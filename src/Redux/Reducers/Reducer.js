import { Dog_Breeds, List_All_Breeds, Theme } from "../Actions/ActionTypes";

const initialState = {
  breeds: [],
  allBreeds: [],
  theme: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Dog_Breeds:
      return {
        ...state,
        breeds: action.payload,
      };

    case List_All_Breeds:
      return {
        ...state,
        allBreeds: action.payload,
      };

    case Theme:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
