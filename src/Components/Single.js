import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Comments from "./Comments";
import Photo from "./Photo";
import {getComment} from "../Store/selector";

const mapState = (state) => {
  return {
    posts: state.posts || [],
    comments:  getComment(state),
  };
};

const Single = (props) => {
  const [post, setPost] = useState({});
  const id = Number(props.match.params.id);
  const index = props.posts.findIndex((post) => post.id === id);

  useEffect(() => {
    const as = props.posts.filter((post) => post.id === id);
    setPost(as[0]);
  }, [props.posts, post, id]);

  if (props.loading === true) {
    return (
      <div className="loader">
        <h1>loading...</h1>
      </div>
    );
  } else {
    return (
      <div>
        {post ? (
          <div className="single">
            <Photo post={post} index={index} {...props} />
            <Comments {...props} id={id} />
          </div>
        ) : (
          <div className="single">
            <h1>post deleted !</h1>
          </div>
        )}
      </div>
    );
  }
};

export default withRouter(connect(mapState)(Single));
