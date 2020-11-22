import React,{useState} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { deletePost,toggleFav} from "../redux/actions";

const Photo = (props) => {
  const [isFav,setFav] = useState(false);
  const dispatch = useDispatch();
  const {fav} = useSelector(state => ({
    fav: state.fav
  }))

  const post = props.post;

  const handleToggleFav = () => {
    dispatch(toggleFav(post.id))
    setFav(false);
  }

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
            alt={post.id}
          />
          <p className="count">
            {props.comments[post.id] ? props.comments[post.id].length : 0}
          </p>
        </Link>
      </div>
      {
        fav.forEach(favId => {
          if(!isFav && favId === post.id){
            setFav(true)
          }
        })
      }


      {isFav ? 
        <div className="div-fav-mini" onClick={handleToggleFav}>
        <img src="https://cpng.pikpng.com/pngl/s/590-5903480_red-heart-with-ochre-outline-clip-art-love.png" className="img-fav-mini" alt="fav-mini" />
      </div>
      :
      <div className="div-fav-mini" onClick={handleToggleFav}>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEWAgID///99fX16enr8/Pz4+PiBgYGFhYXx8fH09PSIiIjDw8P6+vqPj4+ampqMjIzd3d29vb3U1NSkpKTq6urNzc2xsbHj4+Orq6uUlJSfn5/GxsbY2Ni1tbXn5+e5ublllB6BAAAI5ElEQVR4nO2d28KqIBCFBTxrnjVLq/d/y43WX2aoqAwmu3XXTeMnMjAcZjSkurStHwBcP8L960e4f/0I968f4f71I9y/foT714+wL91w7GN+CQ6hZeFWmnsIyjjJHEPgYxlOlsTl+WBZJsamRU2k5a2qM9sx9Jl/NYfQt691nB4wIQ3YS/QXIeRQ5kd7rnmWdPoKy5C8WcF3G0Q7lV59nWWGm9C4Jrez25jV2KKPYJ29aG1LGlGVWqNWiHuOkyu3HU7CLC8CkwyZfdknYZFnS+Go7LwIecyYQZFf+f6SizC6BNbgW+1bt4KY0/Ynn3d2Oe1gaqeoxRDqdRpqnHh34+ahWNKOdnyyZtnRwjSZ7pGThHVgzjH7sG3enJl8vmfNeo93Q2Yw2Y7jhPoxmO4VTBHLs2fwGblLFtnBJIjG23GU0L7Nf60vxkPOy+gkAW83ZzDiIhtjHCGkdpe916fpdOL1PhSVK14kFTmNvcthwmMxq98zTYccn6pTHVa9SK3pjuVxNqFOP5yVdhvTWjrlCaJyvidj6JT78wj1OBRhlzKG8ZhXNbyDIDtWMTDLYRP6qRCzd6XDg6O9sgd2hQM2IpPwGK7tGW+mrWQAMBJrJ2R2RhZhLegLfZomMev1GtXyIYJtJ6wZvvuTUK9PYg1TEcY0zr6IbMBW+MCYxX0QQgBS22n/C7qWEGYYiB+ECQQgVRC9mTmeQaxQxCnCSHAffNk+dUfG6ARjhSJGPaIeoQ0FSG27r9cr2pd1zYTZGKEvYiIzaBvnDzO5YCf6buZgDBP6BaBlKpI3fkDPhTvRN+HSHyLUPRPUtKaZno/8Ct6KPkAI2DsewpaXeatDlkkrh5pNmJ2hTTfu5uxKsJLaLELjBm65tS7DSNMbPgkjCS9XlrqT8CehI+EblSecGh+EwC5ctkjSJ3TA/ahc4YPTI/TUakLaiN47oaFYEzbOxngjVK4JKaLXJfSBgsIthU9GhzCxtn4eAFl5hzBVrwmbMVF/EkaClmW/Szisn4QxdDyzkeI/QkfJj5Q24tl+EKr5kVK1n2lDWCkKqOFYbwkdiLXZr1AbCVPCq6ofKf1Mjy1hvfVzwInkDaGu4Jz0T6QwKKG63bDZNbUpoa1uN6Rz04wSXhUG1EhECWt1u2Eb6WsqBr8v4VLXdIUdTeNqKKGC4X1Hrq/5Kob3LxFD81XuhpQw02zFCY/aUXHCWlN6OGzm3lqiOKGnKbbn1BeJ/wPCSnlCpael/0kbqt4PPeVHi1z5ET/RIsUJay1TnPCoOYoT2pqvdIjfRsDh1g8BKtfXdKXOs/XVrkQBn3zeVs1qotrrpe2KsNJDPqkpYaboQYxWZrMzY0PesdhY9901Q/wdsq8RuTQ7pEjh6KI5Kaw1N0a3fhAwPU4q2IoeiXqdNtFjZQkfJ4ZQ7W79KEBq7wM2hDKuA20hHGR/py9vihIW+h9hoqY3vR+DbgkdJac1zYTmec77svXTgKjonGQ/quhNrbp7o0TBQZ+G911CBVdNcfV+s0u5e0+a5r8TKrcFRS6923m+Qndk7+rfP1StEUmM+oS2UufbOtkxnoR6vvVTiVQbN/UIka1QhIFPr/SbnZwKuUKnFCudRajOagY+d3LUdDN/KBNEud1USm/ZW4qtH02QiqHsLShTYsToupk+IcqVIMzRMKGe7n9mQ0p9hBBlux8xsDua60uBFCekn5KuTwid7gta+NZPK/iRVTDb9brb/fr2OCGqd3xb7zOnIDO7Z7Vfb+NWHNk9EXJ2O7UxL4xMsKwctHuNoxidcIAQXXe5aINdZk0Gdi7oXS6fEnbq8IF83uDZGwFUsVEGM5bvDdGMB3L4D2WdNy47QyyGUr8PVg6wy62feZbKwcTvw7URMpGZ54GFz8OlbUbqW+xnhoqDkdo9YzVK9pLWBR/GihONV2HZxZ7bR37rGYTouIOlKXwark8yTYiir++LOPgMmOYQfj3iJOB0RavvRpwG5KhK9s2IOBjvg3yEX+xueqvbiwm/dnsYBzzF3biqA9ow5TbWKuWqesZX4TErvy/SsAq+sm6cNSzt4tsW4KwLZ9063jqk9u2rELE7WgpsCSEy4Ks28AtblehKq6g5jvI1iNjK+evlzqkH/C3VE7A7OZFZSIiuwdZwrcbi3ZWEdNTY3t+Y6bxivDPrcmeXrRGtuZV451Yed7xNOyO24jklapcQNnVtt0OcM0osJmyuSW2FiE2OGs4CCDcLp1g7vDCEKEs3mYiPFDQVTYjsDVzqbCe6ipC6VMlLqXSqPdeJriNEfi51QRyH+WwnupIQ6ZFEf4MPrCqxwIR0lirtQAPPkhoEIbIlpSDGfAsyAITIiGWEjBazXrIcQhoVg/sbfKiGqqbLIERISJH5McBgwURNKCE6gvobfF7hYwQR0qgYEHH4AIJEQmTfTBhGbN7WOFFxhMioQFzqkmCQIRGENGQEmN8wiogvkhhCiFLpa+YxXQkipP5GMOCyYJAhUYRNyCjuS8W8G0scEkYochUOux7vvsu0xBHSkFFQVEyDwXUTtTcJJES6mIsMa4JBhkQSNhsb6xFHj+EtkFhCAaUU1wWDDAkmREaxyqVSJypiHtOVaEIaFa9wqdhdF+2yJJwQ+dVif7M62mVJPCHSk4WIdCYq0ok+BEC4tLDpsm2JSYEQouuCWIPrkNoCwRAuyI/Gd0htgYAIkT33LoPoYfApKMKZ58RMcbFEX2CEs86JcR9SWyA4QuRwI1o3oD7YCJCQTm84t4pvwicyHUESIhTz3NR8Ja0CESwh8jgIPdhHACZEU2c2sQUMCE6oj6/eYNcDmIq+CZoQ+WOIFFB8MNETOGFzuHiQ0PIgvehd8ITIvw0NGuYNvAWlECL9wv5OcQHdBxvJIESImfQGl1JsyyFEjF0NSYCyCP3ioy+W8E6mlSRC5Lxv3GBzMEOAaMkiRE737A22uK+8rJY0QuTn7t88nLgit14mJI+wCfvJXWUmY5h4SCYhnd8knuclklzMQ3IJt9CPcP/6Ee5fP8L960e4f/0I968f4f6lPuE/CnGN1266kLEAAAAASUVORK5CYII=" className="img-fav-mini"/>
      </div>
}
    </figure>
  );
};

Photo.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Photo;
