//remove
export const REMOVE_POST = "REMOVE_POST";
export const ADD_POST = "ADD_POST";

export const removePost = (index) => {
    return {
        type: REMOVE_POST,
        payload: index
    }
}

export const addPost = (post) => {
    console.log(post);
    return {
        type: ADD_POST,
        payload: post
    }
}

