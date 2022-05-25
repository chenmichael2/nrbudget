import Link from 'next/link';
import { Input } from 'react-rainbow-components';
import styles from '../../styles/login.module.css';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username: </label>
                <Input 
                    label="Username"
                    className={styles.usernameInput}
                />
                <br />
                <label>Password: </label>
                <input type="password"></input>
            </form>
            <Link href="/"><a><h1>Go Home</h1></a></Link>
        </div>
    )
}

export default Login;