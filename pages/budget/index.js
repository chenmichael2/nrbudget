import styles from "../../styles/BudgetPage.module.css";
import React, { useState } from "react";
import BudgetTable from "../../component/BudgetTable";
import BudgetForm from "../../component/BudgetForm";
import TopData from "../../component/TopData";

function Budget() {
    return (
        <div className={styles.pageContainer}>
            <h1>Welcome User!</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    {/* Put the data here */}
                    <TopData />
                    <BudgetTable />
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <h1>Info Section</h1>
                    </div>
                    <div>
                        <BudgetForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;