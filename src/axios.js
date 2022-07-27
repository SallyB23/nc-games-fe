import axios from "axios";

const api  = axios.create(({
    baseURL: "https://sb-nc-games-app.herokuapp.com/api/"
}))

export function getCategories() {
    return api.get("categories")
}

export function getReviewById(id) {
    return api.get(`reviews/${id}`)
}

export function getReviewList(category, orderBy, orderDirection) {
    console.log (category, "<< category")
    console.log( orderBy, "<< orderBy")
    console.log( orderDirection, "<<order direction")
    return api.get('reviews', { params: { category: category, sort_by: orderBy, order: orderDirection }})
}
