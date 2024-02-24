import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search" value={search} onChange={event => setSearch(event.target.value.toLowerCase())} />
            <button onClick={searchHandler}>🔎</button>
        </div>
    )
}

export default SearchBox