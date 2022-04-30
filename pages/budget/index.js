import styles from "../../styles/BudgetPage.module.css";
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import React, { useState } from "react";
import { DatePicker, Input, Picklist, Option, Modal} from "react-rainbow-components"; //react rainbow
import BudgetTable from "../../component/BudgetTable";

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;