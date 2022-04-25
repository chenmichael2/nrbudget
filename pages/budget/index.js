import styles from "../../styles/Budget.module.css";

function Budget() {
    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    <table className={styles.table}>
                        <tr>
                            <td>Month</td>
                            <td>Date</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td>Income</td>
                            <td>Debit</td>
                            <td>Balance</td>
                        </tr>
                    </table>
                </div>
                <div>
                    <h1>Info Section</h1>
                </div>
            </div>
        </div>
    )
}

export default Budget;