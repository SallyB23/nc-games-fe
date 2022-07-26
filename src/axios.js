import axios from "axios";

const api  = axios.create(({
    baseURL: "https://sb-nc-games-app.herokuapp.com/api/"
}))

export function getCategories() {
    return api.get("categories")
}

export function getReviewList() {
    return api.get("reviews")
}