import { useState } from "react";
import ReviewList from "../components/ReviewList";
import SortByForm from "../components/SortByForm";
import "./ReviewListPage.css";

export default function ReviewsListPage() {
  const [category, setCategory] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [orderDirection, setOrderDirection] = useState("desc");

  return (
    <main>
      <SortByForm
        category={category}
        setCategory={setCategory}
        orderBy={orderBy}
        setOrderBy={setOrderBy}
        orderDirection={orderDirection}
        setOrderDirection={setOrderDirection}
      />
      <ReviewList setCategory={setCategory} orderBy={orderBy} orderDirection={orderDirection}/>
    </main>
  );
}
