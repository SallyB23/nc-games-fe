import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../axios";
import ReviewTile from "../components/ReviewTile";
import "./ReviewPage.css"

export default function ReviewPage () {
    const [ reviewData, setReviewData ] = useState({})
    const { review } = useParams()

    useEffect (() => {
        getReviewById(review).then(({ data }) => {
            setReviewData(data.review)
        })
    }, [])
    
    return <main>
        <ReviewTile reviewData={reviewData}/>
    </main>
}