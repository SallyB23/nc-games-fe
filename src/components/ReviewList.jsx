import { useEffect, useState } from "react"
import { getReviewList } from "../axios"
import ReviewCard from "./ReviewCard"

export default function ReviewList() {
    const [ reviewList, setReviewList ] = useState([])

    useEffect(() => {
        getReviewList().then(({data}) => {
            console.log(data.reviews)
            setReviewList(data.reviews)
        })
    }, [])
 
    return <section className="review-list">
        {reviewList.map(review => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </section>
}