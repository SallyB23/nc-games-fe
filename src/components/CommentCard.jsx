import { useEffect, useState } from "react"
import { getUserDetails } from "../axios"
import { formatDate } from "../utils/utils"

export default function CommentCard ({ comment }) {
    const { author, created_at, body } = comment
    const [ authorDetails, setAuthorDetails ] = useState("")
    
    const postedDate = formatDate(created_at)

    useEffect(() => {
        getUserDetails(author).then((data) => {
            setAuthorDetails(data.data.user)
        })
        .catch(err => {
            console.log(err.response)
        })
    }, [])

    return <div className="comment-card">
        <img className="user-avatar" src={authorDetails.avatar_url} alt="user avatar" />
        <h4>{authorDetails.username}</h4>
        <h5>posted on: {postedDate}</h5><br />
        <p>{body}</p>
    </div>

}