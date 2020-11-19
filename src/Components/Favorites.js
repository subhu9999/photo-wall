import React from "react";
import PhotoWall from "./PhotoWall";
import {Link} from "react-router-dom";
import Photo from "./Photo";

const Favorites = (props) => {
    return(
        <div>
        <h3>
          Favorites
        </h3>
        <div className="photoGrid">
          {props.posts &&
            props.posts
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
    )
}

export default Favorites;