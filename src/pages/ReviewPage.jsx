import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../axios";
import CommentsTile from "../components/CommentsTile";
import LoadingSpinner from "../components/LoadingSpinner";
import ReviewTile from "../components/ReviewTile";
import "./ReviewPage.css"

export default function ReviewPage () {
    const [ reviewData, setReviewData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")
    const { review } = useParams()

    useEffect (() => {
        setIsLoading(true)
        getReviewById(review).then(({ data }) => {
            setReviewData(data.review)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            setIsErr(true)
            let errMsgText = `ERROR ${err.response.status}: ${err.response.data.message}`            
            setErrMsg(errMsgText)
        })
    }, [])
    
    if (isLoading) return <LoadingSpinner />
    if (isErr) return <p>{errMsg}</p>
    return <main>
        <ReviewTile reviewData={reviewData} />
        <CommentsTile review_id={reviewData.review_id} />
    </main>
}