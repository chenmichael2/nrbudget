import Link from 'next/link';
import { Input } from 'react-rainbow-components';
import Button from '@mui/material/Button';
import styles from '../../styles/login.module.css';

function Login() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <Input 
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    className={styles.input}
                />
                <br />
                <Input 
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    className={styles.input}
                />
                <Button 
                    onClick={() => {
                        onSubmit();
                    }} 
                    variant="contained"
                    className={styles.loginButton}
                    label="Login"
                />
            </form> 
        </div>
    )
}

export default Login;