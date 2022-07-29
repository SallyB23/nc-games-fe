import { useEffect, useState } from "react"
import { getReviewList } from "../axios"
import ReviewCard from "./ReviewCard"
import { useParams } from "react-router-dom"

export default function ReviewList({ setCategory, orderBy, orderDirection }) {
    const [ reviewList, setReviewList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ isErr, setIsErr ] = useState(false)
    const [ errMsg, setErrMsg ] = useState("")
    let { category } = useParams()
    if (category) category = category.replaceAll(" ", "-")

    useEffect(() => {
        setIsErr(false)
        setErrMsg("")
        setIsLoading(true)
        getReviewList(category, orderBy, orderDirection).then(({ data }) => {
            setReviewList(data.reviews)
            setIsLoading(false)
        })
        .catch(err => {
            setIsLoading(false)
            setIsErr(true)
            setErrMsg(`ERROR: ${err.response.status}: ${err.response.data.message}`)
        })
    }, [category, orderBy, orderDirection])

    if (isLoading) return <p>loading...</p>
    if (isErr) return <p>{errMsg}</p>
    else return <section className="review-list">
        {reviewList.map(review => {
            return <ReviewCard key={review.review_id} review={review}/>
        })}
    </section>
}