import React from "react";
// import PhotoWall from "./PhotoWall";
// import { Link } from "react-router-dom";
// import Photo from "./Photo";
import { useSelector } from "react-redux";
import { getFav } from "../Store/selector";

const Favorites = (props) => {
  const { favs } = useSelector((state) => ({
    favs: getFav(state),
  }));

  if(favs.length === 0){
    return <div>
      <h3>... No Favorites Selected</h3>
    </div>
  }

  return (
    <div>
      <h3>Favorites</h3>
      <div className="photoGrid">
        {favs &&
          favs
            .sort((x, y) => y.id - x.id)
            .map((post, index) => (
              <div className="div-large" key={index}>
                <img src={post.imageLink} className="img-fav-large" />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Favorites;
