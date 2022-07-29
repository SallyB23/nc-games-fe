import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../contexts/User"
import "./NavBar.css"

export default function NavBar() {
    const { username, setUsername } = useContext(UserContext)

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                {username ? <li><Link onClick={() => setUsername("")}to="/sign-in">Sign out</Link></li>
                : <li><Link to="/sign-in">Sign In</Link></li>}
            </ul>
        </nav>
    )
}