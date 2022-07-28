import { useEffect, useState } from "react"
import { getCommentsForReview } from "../axios"
import CommentCard from "./CommentCard"

export default function CommentsTile ({ review_id }) {
    const [ commentList, setCommentList ] = useState([])

    useEffect(() => {
        getCommentsForReview(review_id).then(({ data }) => {
            setCommentList(data.comments)
        })
    }, [])

    return <>
        <h2 className="comments-title">Comments</h2>
        {commentList.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
    </> 
}