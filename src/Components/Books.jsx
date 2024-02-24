import { useState } from "react"

import { books as bookData } from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard";
import styles from "./Books.module.css"
import SearchBox from "./SearchBox";

function Books() {
    const [books, setBooks] = useState(bookData)

   
    const [search, setSearch] = useState([])
    const [liked, setLiked] = useState([]);
    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = liked.filter(i => i.id !== book.id);
            setLiked(newLikedList)

        } else { setLiked(liked => [...liked, book]) }
    };

    const searchHandler = () => {
        if (search) {
            const newItems = bookData.filter(book => book.title.toLocaleLowerCase().includes(search))
            setBooks(newItems)
        } else { setBooks(bookData) }
    }
    return (
        <>
            <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
            <div className={styles.container}>
                <div className={styles.carts}>{books.map(book =>

                    <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />

                )}</div>

                {!!liked.length && <div className={styles.favorite}>{liked.map(book =>
                    <SideCard key={book.id} data={book} />
                )}</div>}
            </div>



        </>
    )
}

export default Books