import { SET_DATA_FOTO, SET_DATA_SEARCH_FOTO } from "./constant"

export const fotoData = (data = [], action) => {
    switch (action.type) {
        case SET_DATA_FOTO:
            return [...data, ...action.result]
        case SET_DATA_SEARCH_FOTO:
            return [...action.result]
        default:
            return data
    }
}