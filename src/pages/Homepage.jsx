import { useState } from "react"
import ReviewList from "../components/ReviewList"
import SortByForm from "../components/SortByForm"
import "./Homepage.css"

export default function Homepage () {
    const [ orderBy, setOrderBy ] = useState("desc")
    const [ category, setCategory ] = useState()
    return (
        <main>
            <SortByForm setOrderBy={setOrderBy} setCategory={setCategory}/>
            <ReviewList />
        </main>
    )

}