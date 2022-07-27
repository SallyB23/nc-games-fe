import { useEffect, useState } from "react"
import { getReviewList, getFilteredReviewList } from "../axios"
import ReviewCard from "./ReviewCard"
import { useParams } from "react-router-dom"

export default function ReviewList({ setCategory }) {
    const [ reviewList, setReviewList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        setIsLoading(true)
        if (!category) {
            getReviewList().then(({data}) => {
                setReviewList(data.reviews)
            })
        } else {
            getFilteredReviewList(category.replaceAll(" ", "-")).then(({data}) => {
                setReviewList(data.reviews)
            })
        }
        setIsLoading(false)
    }, [category])

    if (isLoading) return <p>loading...</p>
    else return <section className="review-list">
        {reviewList.map(review => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </section>
}