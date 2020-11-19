import React from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../redux/actions";

const Comments = (props) => {
  const dispatch = useDispatch();
  const postId = props.id;
  const comments = props.comments[postId];
  return (
    <div className="comment">
      {comments &&
        comments.map((comment, index) => <p key={index}>{comment}</p>)}

      <form
        className="form comment"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(addComment(event.target.elements.comment.value, postId));
          event.target.elements.comment.value = ""
        }}
      >
        <input type="text" placeholder="Comment" name="comment" />
        <input type="submit" hidden />
      </form>
    </div>
  );
};

export default Comments;
