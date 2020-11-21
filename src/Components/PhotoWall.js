import React, { Component } from "react";
import "../App.css";
import Photo from "./Photo";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Snackbar from "./Snackbar";

class PhotoWall extends Component {
  snackbarRef = React.createRef();

  _showSnackbarHandler = () => {
    this.snackbarRef.current.openSnackBar('Button Pressed...');
  }

  render() {
    return (
      <div>
        <Link className="addIcon" to="/AddPhoto">
          +
        </Link>

        <button className="fav-link">
          <img
            className="fav-main"
            src="https://purepng.com/public/uploads/large/heart-icon-y1k.png"
          />
        </button>

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
