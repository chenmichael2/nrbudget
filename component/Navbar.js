import Link from "next/link";
import styles from "../styles/Navbar.module.css"

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <a className={styles.logoContainer}><img className={styles.brand} src="/icon-1.png" /><h1 className={styles.brandName}>Budget</h1></a>
                </Link>
            </div>
            <div className="burger"></div>
            <div className="burger"></div>
            <div className="burger"></div>
            <ul>
                <li>
                    <Link href="/login"><a>Login</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;