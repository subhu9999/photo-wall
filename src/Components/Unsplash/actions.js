export const LOAD_IMAGES = "LOAD_IMAGES";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const LOAD_FAIL = "LOAD_FAIL";

 const loadImages = () =>{
    return {
        type: LOAD_IMAGES
    }
}

 const setImages = (images) => {
    return{
        type: LOAD_SUCCESS,
        images
    }
}

 const setError = (error) => (
    {
        type: LOAD_FAIL,
        error
    }
)

export {
    loadImages,
    setImages,
    setError
}