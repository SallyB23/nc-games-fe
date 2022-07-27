import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../axios";
import ReviewTile from "../components/ReviewTile";
import "./ReviewPage.css"

export default function ReviewPage () {
    const [ reviewData, setReviewData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const { review } = useParams()

    useEffect (() => {
        setIsLoading(true)
        getReviewById(review).then(({ data }) => {
            setReviewData(data.review)
            setIsLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>loading...</p>
    return <main>
        <ReviewTile reviewData={reviewData} />
    </main>
}