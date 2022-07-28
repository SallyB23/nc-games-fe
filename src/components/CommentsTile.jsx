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

    return <section className="comments-section">
        <h2>Comments</h2>
        {commentList.length === 0 ? <p>Be the first to comment on this review</p> : 
         <>
            {commentList.map(comment => {
            return <CommentCard key={comment.comment_id} comment={comment}/>
        })}
         </>
}
    </section>
}