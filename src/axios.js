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
    return api.get('reviews', { params: { category: category, sort_by: orderBy, order: orderDirection }})
}

export function getCommentsForReview(id) {
    return api.get(`reviews/${id}/comments`)
}

export function getUserDetails(username) {
    return api.get(`users/${username}`)
}

export function updateReviewVotes(review_id, votes) {
    return api.patch(`reviews/${review_id}`, {inc_votes: votes})
}

export function postNewComment(id, username, body) {
    return api.post(`reviews/${id}/comments`, { username, body })
}

export function postNewUser(name, username, avatar_url) {
    return api.post('users', { name, username, avatar_url })
}

export function deleteComment(id) {
    return api.delete(`comments/${id}`)
}