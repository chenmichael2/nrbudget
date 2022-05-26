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
            <Link href="/"><h1><a>Go Home</a></h1></Link>
        </div>
    )
}

export default Login;