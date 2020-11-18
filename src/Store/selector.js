import {createSelector} from "reselect";

const getComments = (state) => {
    return state.comments
}

export const getComment = createSelector([getComments],(getComments) => {
    return getComments;
});