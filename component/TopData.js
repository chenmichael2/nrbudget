import Paper from '@mui/material/Paper';
import styles from '../styles/TopData.module.css';

function TopData() {
    return (
        <Paper className={styles.paper}>
            <div className={styles.topDataContainer}>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>Total Balance</p>
                    <p className={styles.dataType}>$0.00</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>Total Debt</p>
                    <p className={styles.dataType}>$0.00</p>
                </div>
                <div className={styles.data}>
                    <p className={styles.dataTitle}>Total Income</p>
                    <p className={styles.dataType}>$0.00</p>
                </div>
            </div>
        </Paper>
    )
}

export default TopData;