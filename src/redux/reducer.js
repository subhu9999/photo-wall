import posts from "../data/posts";
import {
  ADD_COMMENT,
  ADD_POST,
  LOAD_POSTS,
  REMOVE_POST,
  TOGGLE_FAV,
} from "./actions";
import { combineReducers } from "redux";

const favReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      if (state.includes(action.payload)) {
        return [...state.filter((post) => post !== action.payload)];
      } else {
        return [...state,action.payload];
      }
      
    default:
      return state;
  }
};

const commentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      if (!state[action.payload.postId]) {
        return { ...state, [action.payload.postId]: [action.payload.comment] };
      } else {
        return {
          ...state,
          [action.payload.postId]: [
            ...state[action.payload.postId],
            action.payload.comment,
          ],
        };
      }
    default:
      return state;
  }
};

const postReducer = (state = posts, action) => {
  // console.log(action.payload);

  switch (action.type) {
    case REMOVE_POST:
      return [...state.filter((post, index) => index !== action.payload)];

    case ADD_POST:
      return [...state.concat([action.payload])];

    case LOAD_POSTS:
      return action.payload;

    default:
      return state;
  }
};

export default combineReducers({
  posts: postReducer,
  comments: commentReducer,
  fav: favReducer
});
