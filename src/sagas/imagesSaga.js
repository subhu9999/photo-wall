import {put,takeEvery,select,call} from "redux-saga/effects"
import { LOAD_IMAGES, LOAD_SUCCESS } from "../Components/Unsplash/actions"

function* watchImagesLoad(){
    yield takeEvery(LOAD_SUCCESS,handleImagesLoad);
}

const getPage = (state) => {
    return state.nextPage
}

function* handleImagesLoad(){
    const page = yield select(getPage);
    const images = yield call(fetchImages,page);
    console.log(page);
    // yield put({type: });
}



export default watchImagesLoad;
