import {
  SELECTED_KEYWORD,
  SELECTED_CATEGORY,
  SELECTED_AUTHOR,
  REMOVED_FILTERS,
} from "./actionTypes";

export const selectedKeyword = (keyword) => {
  return {
    type: SELECTED_KEYWORD,
    payload: keyword,
  };
};

export const selectedCategory = (category) => {
  return {
    type: SELECTED_CATEGORY,
    payload: category,
  };
};

export const selectedAuthor = (authorName) => {
  return {
    type: SELECTED_AUTHOR,
    payload: authorName,
  };
};
export const removedFilters = (filter) => {
  return {
    type: REMOVED_FILTERS,
    payload: filter,
  };
};
