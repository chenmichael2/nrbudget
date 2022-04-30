import styles from "../../styles/Budget.module.css";
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
                        <Paper className={styles.paperForm} elevation={3}>
                            <div className={styles.paperTitle}>
                                <h1>Submit a Budget</h1>
                            </div>
                            <form> {/* action="url it is sending" */}
                                <DatePicker
                                    formatStyle="medium"
                                    id="datePicker-1"
                                    value={date}
                                    onChange={onChange}
                                    required
                                    error="Date required" // this is causing the box to look red
                                    isCentered={true}
                                    label="Date"
                                    labelAlignment="left"
                                    placeholder="Date"
                                    className={styles.datePicker}
                                />
                                <Input
                                    label="Description"
                                    placeholder="Description"
                                    required
                                    isCentered={true}
                                    labelAlignment="left"
                                    error="Description Required"
                                />
                                <Input
                                    label="Category"
                                    placeholder="Category"
                                    required
                                    isCentered={true}
                                    labelAlignment="left"
                                    error="Category Required"
                                />
                                <Input
                                    label="Income"
                                    placeholder="Income"
                                    isCentered={true}
                                    labelAlignment="left"
                                />
                                <Input
                                    label="Debit"
                                    placeholder="Debit"
                                    isCentered={true}
                                    labelAlignment="left"
                                />
                                <div className={styles.budgetButton}>
                                    <Button onClick={() => {
                                        onSubmit();
                                    }} variant="contained">Budget</Button>
                                </div>
                            </form>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;