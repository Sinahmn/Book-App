import styles from "./Layout.module.css"

function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
                <h1>Book App</h1>
                <p> React.JS</p>
            </header>
            {children}
            <footer className={styles.footer}><p>DveLoped By Sina</p></footer>







        </>
    )
}

export default Layout