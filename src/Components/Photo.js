import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deletePost} from "../redux/actions";

const Photo = (props) => {
  const dispatch = useDispatch();

  const post = props.post;
  return (
    <figure className="figure">
      <Link to={`/single/${post.id}`}>
        <img className="photo" src={post.imageLink} alt={post.description} />
      </Link>
      <figcaption>
        <p>{post.description}</p>
      </figcaption>

      <div className="button-container">
        <button
          className="remove-button"
          onClick={() => {
            dispatch(deletePost(props.index,post.id));
            // dispatch(removePost(props.index,post.id));
            props.history.push("/");
          }}
        >
          Remove
        </button>

        <Link className="comment-div link" to={`/single/${post.id}`}>
          <img
            className="comment-bubble"
            src="https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png"
          />
          <p className="count">
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </p>
        </Link>
      </div>
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
