import Link from "next/link";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <div>hello</div>
            </div>
            <ul>
                <Link href="/login"><a><li>Login</li></a></Link>
            </ul>
        </nav>
    )
}

export default Navbar;