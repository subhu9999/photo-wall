import {createSelector} from "reselect";
import _ from "lodash";

const getComments = (state) => {
    return state.comments
}

export const getComment = createSelector([getComments],(getComments) => {
    console.log("get commemt")
    return getComments;
});



const postsSelector = (state) => {
    return state.posts
}

const selectedIds = (state) => {
    return state.fav
}

const getFavPosts = (posts,selectedIds) => {
    const favs = [];

    selectedIds.forEach(selectedId => {
       posts.forEach((post) => {

          if(post.id === selectedId){
              favs.push(post)
          }
        }) 
    });
    

    return favs
}

export const getFav = createSelector(postsSelector,selectedIds,getFavPosts);