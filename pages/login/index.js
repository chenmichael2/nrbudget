import Link from 'next/link';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username:</label>
                <input type="text"></input>
            </form>
            <Link href="/"><a><h2>Go Home</h2></a></Link>
        </div>
    )
}

export default Login;