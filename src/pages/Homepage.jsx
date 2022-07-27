import "./Homepage.css"
import { UserContext } from "../contexts/User"
import { useContext } from "react"

export default function Homepage () {
    const { username } = useContext(UserContext)

    return <h2>Welcome {username}</h2>
}