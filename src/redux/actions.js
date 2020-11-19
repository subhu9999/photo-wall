import { fbDatabase } from "../config";

//remove
export const REMOVE_POST = "REMOVE_POST";
export const ADD_POST = "ADD_POST";
export const ADD_COMMENT = "ADD_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const LOAD_POSTS = "LOAD_POSTS";
export const TOGGLE_FAV = "TOGGLE_FAV";

export const toggleFav = (postId) => {
 return {
   type: TOGGLE_FAV,
   payload: postId
 }
}

export const startAddingPost = (post) => {
  return async (dispatch, getState) => {
    try {
      await fbDatabase.ref("posts").update({ [post.id]: post });
      dispatch(addPost(post));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const postsRef = fbDatabase.ref("/posts/");
    let posts = [];
    await postsRef.once("value", (snap) => {
      snap.forEach((child) => {
        posts.push(child.val())
      });
    });
    dispatch(loadPosts(posts));
  };
};

export const deletePost = (index,id) => {
  return async(dispatch) => {
      const postsRef = fbDatabase.ref(`/posts/${id}`);
      await postsRef.remove();
      dispatch(removePost(index))
  }
}

export const loadPosts = (posts) => {
  return {
    type: LOAD_POSTS,
    payload: posts,
  };
};

export const getCurrentPostLikes = (post) => async (dispatch) => {
  // const response = await axios.get(`/api/get_post_likes/2`);
  // dispatch({ type: GET_POST_LIKES, payload: response.data.likes });
  console.log("sadfs");
  dispatch(addPost(post));
};

export const removePost = (index) => {
  return {
    type: REMOVE_POST,
    payload: index,
  };
};

export const addPost = (post) => {
  console.log(post);
  return {
    type: ADD_POST,
    payload: post,
  };
};

export const addComment = (comment, postId) => {
  return {
    type: ADD_COMMENT,
    payload: {
      comment,
      postId,
    },
  };
};

export const removeComment = (id) => {
  return {
    type: REMOVE_COMMENT,
    payload: id,
  };
};
