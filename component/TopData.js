import Paper from '@mui/material/Paper';
import styles from '../styles/TopData.module.css';

function TopData() {
    return (
        <Paper className={styles.paper}>
            <div className={styles.topDataContainer}>
                <div className={styles.data}>
                    <p>Total Balance</p>
                    <p>$0.00</p>
                </div>
                <div className={styles.data}>
                    <p>Total Debt</p>
                    <p>$0.00</p>
                </div>
                <div className={styles.data}>
                    <p>Total Income</p>
                    <p>$0.00</p>
                </div>
            </div>
        </Paper>
    )
}

export default TopData;