import upvote from "../images/upvote.png"
import downvote from "../images/downvote.png"
import { useState } from "react"

export default function Votes({ votes, setVotes, setVoteIncrement }) {
    const [ clicked, setClicked ] = useState(false)
    
    const handleUpClick = () => {
        setVotes(currVote => currVote + 1)
        setVoteIncrement(1)
        setClicked(true)
    }

    const handleDownClick = () => {
        setVotes(currVote => currVote - 1)
        setVoteIncrement(-1)
        setClicked(true)
    }

    return <>
    {clicked || <button type="button" onClick={handleUpClick}><img src={upvote} alt="green up arrow" /></button> }
        <p>votes: {votes}</p>
    {clicked || <button type="button" onClick={handleDownClick}><img src={downvote} alt="red down arrow" /></button> }
    </>
}