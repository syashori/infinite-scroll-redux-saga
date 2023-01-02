import { takeEvery, put } from 'redux-saga/effects'
import { GET_DATA_FOTO, SET_DATA_FOTO, SEARCH_FOTO, SET_DATA_SEARCH_FOTO } from './constant'
import { TOKEN } from '../utils/config'
import axios from 'axios';

function* getFotos(data) {
    let result = [];
    if(data.query){
        yield axios.get(`https://api.unsplash.com/photos?page=${data.page}&query=${data.query}`, {
            headers: { Authorization: `Client-ID ${TOKEN}` }
        }).then(response => {
            result = response.data;
        });
    }else{
        yield axios.get(`https://api.unsplash.com/photos?page=${data.page}`, {
            headers: { Authorization: `Client-ID ${TOKEN}` }
        }).then(response => {
            result = response.data;
        });
    }
    yield put({type: SET_DATA_FOTO, result})
}

function* searchFotos(data) {
    let result = [];
    yield axios.get(`https://api.unsplash.com/photos?page=1&query=${data.query}`, {
        headers: { Authorization: `Client-ID ${TOKEN}` }
    }).then(response => {
        result = response.data;
    });
    yield put({type: SET_DATA_SEARCH_FOTO, result})
}

function* fotoSaga() {
    yield takeEvery(GET_DATA_FOTO, getFotos)
    yield takeEvery(SEARCH_FOTO, searchFotos)
}

export default fotoSaga;