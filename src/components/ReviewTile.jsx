import { useEffect, useState } from "react"
import { updateReviewVotes } from "../axios"
import { formatDate } from "../utils/utils"
import Votes from "./Votes"

export default function ReviewTile ({ reviewData }) {
    const { title, review_body, review_img_url, votes, owner, created_at, comment_count, review_id } = reviewData
    const [ reviewVotes, setReviewVotes ] = useState(votes)
    const [ voteIncrement, setVoteIncrement ] = useState(0)
    const [ isErr, setIsErr ] = useState(false)

    const postedDate = formatDate(created_at)

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
        <p className="author-details">posted by {owner} on {postedDate}</p>
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
    </section>
}