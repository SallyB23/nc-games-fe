import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="">Log out</Link></li>
            </ul>
        </nav>
    )
}