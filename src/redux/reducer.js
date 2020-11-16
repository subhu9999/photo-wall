import posts from '../data/posts';
import {ADD_POST, REMOVE_POST} from "./actions";

const postReducer = (state = posts, action) => {
  // console.log(action.payload);

  switch (action.type){
    case REMOVE_POST: 
      return [...state.filter((post,index) => index !== action.payload)]
    
    case ADD_POST:
      return [...state.concat([action.payload])]

    default:
      return state
      
  }
};

export default postReducer;
