import { useState } from "react"
import ReviewList from "../components/ReviewList"
import SortByForm from "../components/SortByForm"
import "./ReviewListPage.css"

export default function ReviewsListPage () {
    const [ category, setCategory] = useState("")
    const [ orderBy, setOrderBy ] = useState("")

    return (
        <main>
            <SortByForm category={category} setCategory={setCategory} orderBy={orderBy} setOrderBy={setOrderBy}/>
            <ReviewList setCategory={setCategory} orderBy={orderBy}/>
        </main>
    )

}