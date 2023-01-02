import { GET_DATA_FOTO, SEARCH_FOTO } from "./constant"

export const getFoto = (page, query) => {
    return {
        type: GET_DATA_FOTO,
        page,
        query
    }
}

export const searchFoto = (query) => {
    return {
        type: SEARCH_FOTO,
        query
    }
}