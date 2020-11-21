import { LOAD_SUCCESS, LOAD_IMAGES, LOAD_FAIL } from "./actions";

export const imagesReducer = (state = [],action) => {
    if(action.type === LOAD_SUCCESS){
        return [...state,...action.images]
    }
    return state
}

export const loadingReducer = (state = false,action) =>{
    switch (action.type){
        case LOAD_IMAGES:
            return true
        case LOAD_SUCCESS:
            return false
        case LOAD_FAIL:
            return false

        default:
            return state
    }

}

export const errorReducer = (state = null,action ) => {
    switch (action.type){
        case LOAD_FAIL:
            return action.error
        case LOAD_SUCCESS:
            return null
        default:
            return state
    }
}

export const pageReducer = (state = 1,action) => {
    switch (action.type) {
        case LOAD_SUCCESS:
            return state+1
        default:
            return state
    }
}


