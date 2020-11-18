import React, { Component } from "react";
import "../App.css";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto">
          +
        </Link>
        <div className="photoGrid">
          {this.props.posts &&
            this.props.posts
              .sort((x, y) => y.id - x.id)
              .map((post, index) => (
                <Photo
                  key={index}
                  post={post}
                  index={index}
                  {...this.props}
                  {...this.props.params}
                />
              ))}
        </div>
      </div>
    );
  }
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PhotoWall;
