import React, { Component } from "react";
import "../App.css";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class PhotoWall extends Component {
  render() {

    return (
      <div>
        <div
          className="div-unsplash"
          onClick={() => this.props.history.push("/unsplash-api")}
        >
          <img
            src="https://cleverbread.com/wp-content/uploads/2020/02/unsplash-logo-300x200.jpg"
            className="img-fav"
          />
        </div>

        <div
          className="div-fav"
          onClick={() => this.props.history.push("/fav")}
        >
          <img
            src="https://purepng.com/public/uploads/large/heart-icon-y1k.png"
            className="img-fav"
          />
        </div>

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
