import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DatePicker, Input, Picklist, Option, Modal } from "react-rainbow-components"; //react rainbow
import styles from '../styles/BudgetForm.module.css';
import { useState } from 'react';

function BudgetForm() {
    // Date
    const [date, setDate] = useState(null);

    function onChange(date) {
        setDate(date);
        console.log(date);
    }

    function onSubmit() {
        console.log("submit button");
        // grab all the ids
    }
    // Dropdown

    return (
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
                {/* Need to change this section input into a dropdown */}
                {/* <Input
                    label="Category"
                    placeholder="Category"
                    required
                    isCentered={true}
                    labelAlignment="left"
                    error="Category Required"
                /> */}
                
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
    )
}

export default BudgetForm;