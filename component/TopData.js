import Paper from '@mui/material/Paper';
import styles from '../styles/TopData.module.css';

function TopData() {
    return (
        <Paper className={styles.paper}>
            <div className={styles.topDataContainer}>
                <div>
                    <h1>Total Balance</h1>
                </div>
                <div>

                </div>
                <h1>Total Debt</h1>
                <div>
                    
                </div>
                <h1>Total Income</h1>
            </div>
        </Paper>
    )
}

export default TopData;