import dice from "../images/dice.png"
import "./Header.css"

export default function Header () {
    return (
        <header>
            <h1>NC Games</h1>
            <img src={dice} alt="a red die" />
        </header>
    )
}