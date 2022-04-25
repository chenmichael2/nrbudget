import styles from "../../styles/Budget.module.css";

function Budget() {
    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    {/* Things I want in my budget page */}
                </div>
                <div>
                    <h1>Info Section</h1>
                </div>
            </div>
        </div>
    )
}

export default Budget;