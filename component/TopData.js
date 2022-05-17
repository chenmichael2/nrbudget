import Paper from '@mui/material/Paper';
import styles from '../styles/TopData.module.css';

function TopData() {
    return (
        <Paper className={}>
            <div className={styles.topDataContainer}>
                <h1>Total Balance</h1>
                <h1>Total Debt</h1>
                <h1>Total Income</h1>
            </div>
        </Paper>
    )
}

export default TopData;