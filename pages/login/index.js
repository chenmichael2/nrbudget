import Link from 'next/link';
import { Input, Button } from 'react-rainbow-components';
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
                <Button onClick={() => {
                        onSubmit();
                    }} variant="contained">Budget
                </Button>
            </form> 
        </div>
    )
}

export default Login;