import styles from "../../styles/BudgetPage.module.css";
import React, { useState } from "react";
import BudgetTable from "../../component/BudgetTable";
import BudgetForm from "../../component/BudgetForm";

function Budget() {
    const [date, setDate] = useState(null);

    function onChange(date) {
        setDate(date);
        console.log(date);
    }

    function onSubmit() {
        console.log("submit button");
        // grab all the ids
    }

    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    {/* Where the table is at */}
                    <BudgetTable />
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <h1>Info Section</h1>
                    </div>
                    <div>
                        {/* form */}
                        <BudgetForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;