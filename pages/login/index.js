import Link from 'next/link';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username: </label>
                <input type="text"></input>
                <br />
                <label>Password: </label>
                <input type="password"></input>
            </form>
            <Link href="/"><a><h1>Go Home</h1></a></Link>
        </div>
    )
}

export default Login;