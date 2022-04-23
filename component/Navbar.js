import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <div>hello</div>
            </div>
            <ul>
                <li>
                    <Link href="/login"><a>Login</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;