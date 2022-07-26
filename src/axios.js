import axios from "axios";

const api  = axios.create(({
    baseURL: "https://sb-nc-games-app.herokuapp.com/api/"
}))

export function getCategories() {
    return api.get("categories")
}

export function getReviewList(category) {
    return api.get("reviews", {params: {category: category }})
}

export function getFilteredReviewList(category) {
    return api.get(`reviews?category=${category}`)
}