import styles from "../../styles/Budget.module.css";

function Budget() {
    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th>Month</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Income</th>
                                <th>Debit</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Month</td>
                                <td>Date</td>
                                <td>Description</td>
                                <td>Category</td>
                                <td>Income</td>
                                <td>Debit</td>
                                <td>Balance</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.infoContainer}>
                    <h1>Info Section</h1>
                </div>
            </div>
        </div>
    )
}

export default Budget;