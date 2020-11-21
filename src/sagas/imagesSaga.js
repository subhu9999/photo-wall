import {put,takeEvery,select} from "redux-saga/effects"
import { LOAD_IMAGES } from "../Components/Unsplash/actions"

function* watchImagesLoad(){
    yield takeEvery(LOAD_IMAGES,handleImagesLoad);
}

const getPage = (state) => {
    return state.nextPage
}

function* handleImagesLoad(){
    const page = yield select(getPage);

    console.log(page);
    // yield put({type: });
}

export default watchImagesLoad;
