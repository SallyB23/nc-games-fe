import { useState } from "react"
import ReviewList from "../components/ReviewList"
import SortByForm from "../components/SortByForm"
import "./ReviewListPage.css"

export default function ReviewsListPage () {
    const [ orderBy, setOrderBy ] = useState("desc")
    const [ category, setCategory ] = useState()
    return (
        <main>
            <SortByForm setOrderBy={setOrderBy} setCategory={setCategory}/>
            <ReviewList />
        </main>
    )

}