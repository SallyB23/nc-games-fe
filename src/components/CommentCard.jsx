import { useEffect, useState } from "react"
import { getUserDetails } from "../axios"

export default function CommentCard ({ comment }) {
    const { author } = comment
    const [ authorDetails, setAuthorDetails ] = useState("")
    
    useEffect(() => {
        getUserDetails(author).then((data) => {
            setAuthorDetails(data.data.user)
        })
        .catch(err => {
            console.log(err.response)
        })
    })

    return <>
        <img className="user-avatar" src={authorDetails.avatar_url} alt="user avatar" />
        <h4>{authorDetails.username}</h4>
        <p>{comment.body}</p>
    </>

}