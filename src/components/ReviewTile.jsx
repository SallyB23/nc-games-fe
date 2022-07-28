import CommentsTile from "./CommentsTile"
import { useEffect, useState } from "react"
import { updateReviewVotes } from "../axios"
import Votes from "./Votes"

export default function ReviewTile ({ reviewData }) {
    const { title, review_body, review_img_url, votes, owner, created_at, comment_count, review_id } = reviewData
    const [ reviewVotes, setReviewVotes ] = useState(votes)
    const [ voteIncrement, setVoteIncrement ] = useState(0)
    const [ isErr, setIsErr ] = useState(false)

    const dateTime = created_at.split("T")
    const date = dateTime[0].split("-").reverse().join("/")
    const timeArr = dateTime[1].split(":")
    const time = timeArr.splice(0, 2).join(":")

    useEffect (() => {
        updateReviewVotes(review_id, voteIncrement)
        .catch(err => {
            setIsErr(true)
            setReviewVotes(currVote => currVote - voteIncrement)
        })
        setVoteIncrement(0)
      }, [reviewVotes])
    
    return <section className="review-tile">
        <h2>{title}</h2>
        <p className="author-details">posted by {owner} on {date} at {time}</p>
        <picture>
            <img src={review_img_url} alt="review img" />
        </picture>
        <section className="review-body">
            <p className="review-text">{review_body}</p>
            <div className="counts">
                <div className="votes">
                    <Votes votes={reviewVotes} setVotes={setReviewVotes} setVoteIncrement={setVoteIncrement}/>
                </div>
                <p>comments: {comment_count}</p>
            </div>
            {isErr && <p>Something went wrong, please try again later</p>}
        </section>
        <section>
            <CommentsTile review_id={review_id}/>
        </section>
    </section>
}