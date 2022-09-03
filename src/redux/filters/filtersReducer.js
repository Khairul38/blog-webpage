import {
  SELECTED_KEYWORD,
  SELECTED_CATEGORY,
  SELECTED_AUTHOR,
  REMOVED_FILTERS,
} from "./actionTypes";
import { initialState } from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_KEYWORD:
      if (action.payload.length === 0) {
        return {
          ...state,
          keyword: "",
        };
      } else {
        return {
          ...state,
          keyword: action.payload,
        };
      }

    case SELECTED_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    case SELECTED_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case REMOVED_FILTERS:
      switch (action.payload) {
        case "Category":
          return {
            ...state,
            category: "",
          };
        case "Author":
          return {
            ...state,
            author: "",
          };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default filtersReducer;
