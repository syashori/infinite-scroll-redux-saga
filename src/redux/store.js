import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "./combineReducer";
import createSagaMiddleware from 'redux-saga';
import fotoSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:combineReducers,
    middleware: ()=> [sagaMiddleware]
});

sagaMiddleware.run(fotoSaga);

export default store