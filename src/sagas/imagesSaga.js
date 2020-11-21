import { put, takeEvery, select, call } from "redux-saga/effects";
import { LOAD_IMAGES, LOAD_SUCCESS } from "../Components/Unsplash/actions";
import { fetchImages } from "../api";
import { setImages, setError } from "../Components/Unsplash/actions";

function* watchImagesLoad() {
  yield takeEvery(LOAD_IMAGES, handleImagesLoad);
}

const getPage = (state) => {
  return state.nextPage;
};

function* handleImagesLoad() {
  try {
    const page = yield select(getPage);
    const images = yield call(fetchImages, page);
    yield put(setImages(images));
  } catch (error) {
    console.log(error.toString());

    yield put(setError(error.toString()));
  }
}

export default watchImagesLoad;
