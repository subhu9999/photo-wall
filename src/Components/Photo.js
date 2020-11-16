import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {useDispatch} from "react-redux";
import { removePost } from '../redux/actions';


const Photo = (props) => {
const dispatch = useDispatch();

        const post = props.post;
        return(
                <figure className="figure">
                    <Link to={`/single/${post.id}`}>
                    <img className="photo" src={post.imageLink} alt={post.description} />
                    </Link>
                    <figcaption>
                        <p>{post.description}</p>
                    </figcaption>

                    <div className="button-container">
                        <button className="remove-button" onClick={() => {
                            // props.removePost(props.index)
                            dispatch(removePost(props.index))
                        }}>
                            Remove
                        </button>
                    </div>
                </figure>
        )
    }

Photo.propTypes = {
    post: PropTypes.object.isRequired
}

export default Photo;