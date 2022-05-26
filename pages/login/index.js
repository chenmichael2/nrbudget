import Link from 'next/link';
import { Input } from 'react-rainbow-components';
import styles from '../../styles/login.module.css';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <Input 
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    required
                    placeholder="Username"
                    className={styles.input}
                />
                <br />
                <Input 
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    required
                    className={styles.input}
                />
            </form>
            <Link href="/"><a><h1>Go Home</h1></a></Link>
        </div>
    )
}

export default Login;