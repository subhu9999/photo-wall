import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Unsplash.css";
import { loadImages, LOAD_IMAGES, LOAD_SUCCESS, setImages } from "./actions";

const key = "5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02";

const Unsplash = (props) => {
  // const [images, setImages] = useState([]);
  const images = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(newGen().next());
    if (images.length === 0) {
      fetchImages();
    }
  }, [images]);

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
      .then((res) => res.json())
      .then((images) => {
        // setImages(images);
        dispatch(setImages(images));
      });
  };

  function* newGen() {
    yield "one value";

    return "final val";
  }

  const testgen = () => {
    const result = sayHiGeneartor();
    // console.log(result.next());

    for (const iterator of result) {
      console.log(iterator);
    }
  };

  function* sayHiGeneartor() {
    yield "hey";
    yield "2he";
    return "hi";
  }

  return (
    <React.Fragment>
      <header>Unsplash Photos !</header>

      <div className="content">
        <section className="grid">
          {images.map((image) => (
            <div
              key={image.id}
              className={`item item-${Math.ceil(image.height / image.width)}`}
            >
              <img
                src={image.urls.small}
                alt={image.user.username}
                className="img-unsplash"
              />
            </div>
          ))}

          <button onClick={() => dispatch({type: LOAD_IMAGES})}>Load Images</button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Unsplash;
