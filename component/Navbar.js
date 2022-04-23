import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><a>hello</a></Link>
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