import { useEffect, useState } from "react"
import { getCommentsForReview } from "../axios"
import CommentCard from "./CommentCard"
import NewCommentForm from "./NewCommentForm"

export default function CommentsTile ({ review_id }) {
    const [ commentList, setCommentList ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getCommentsForReview(review_id).then(({ data }) => {
            setCommentList(data.comments)
        setIsLoading(false)
        })
    }, [])

    if (isLoading) return <p>loading...</p>
    return <section className="comments-section">
        <h2>Comments</h2>
            {commentList.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
        <NewCommentForm review_id={review_id} setCommentList={setCommentList} commentList={commentList}/>
    </section>
}