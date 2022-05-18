import Paper from '@mui/material/Paper';
import styles from '../styles/TopData.module.css';

function TopData() {
    return (
        <Paper className={styles.paper}>
            <div className={styles.topDataContainer}>
                <div className={}>
                    <h1>Total Balance</h1>
                    <h1>$0.00</h1>
                </div>
                <div className={}>
                    <h1>Total Debt</h1>
                    <h1>$0.00</h1>
                </div>
                <div>
                    <h1>Total Income</h1>
                    <h1>$0.00</h1>
                </div>
            </div>
        </Paper>
    )
}

export default TopData;