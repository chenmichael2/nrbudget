import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DatePicker, Input, Picklist, Option, Modal, GlobalHeader } from "react-rainbow-components"; //react rainbow
import styles from '../styles/BudgetForm.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';

function BudgetForm() {
    // Date
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [income, setIncome] = useState(null);
    const [debit, setDebit] = useState(null);

    function onChange(date) {
        setDate(date);
    }

    function descriptionChange(e) {
        e.preventDefault();
        setDescription(e.target.value);
    }

    function categoryChange(e) {
        setCategory(e.target.value);
        // this doesn't work
    }

    function incomeChange(e) {
        e.preventDefault();
        setIncome(e.target.value);
    }

    function debitChange(e) {
        e.preventDefault();
        setDebit(e.target.value);
    }

    function onSubmit() {
        console.log("submit button");
        let dateInput = date;
        let descriptionInput = description;
        let categoryInput = category;
        let incomeInput = income;
        let debitInput = debit;
        console.log(dateInput, descriptionInput, categoryInput, incomeInput, debitInput);
        // grab all the ids
    }
    // Dropdown

    return (
        <Paper className={styles.paperForm} elevation={3}>
            <div className={styles.paperTitle}>
                <h1>Submit a Budget</h1>
            </div>
            <form> {/* action="url it is sending" */}
                <div className={styles.inputs}>
                    <DatePicker
                        formatStyle="medium"
                        id="datePicker-1"
                        value={date}
                        onChange={onChange}
                        required
                        error="Date required" // this is causing the box to look red
                        label="Date"
                        labelAlignment="left"
                        placeholder="Date"
                        className={styles.datePicker}
                    />
                </div>
                <div className={styles.inputs}>
                    <Input
                        label="Description"
                        placeholder="Description"
                        name="description"
                        id="description"
                        onChange={descriptionChange}
                        required
                        labelAlignment="left"
                        error="Description Required"
                    />
                </div>
                <div className={styles.inputs}>
                    <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                        <div className="rainbow-flex rainbow-align_right">
                            <Picklist
                                label="Category"
                                className={styles.pickList}
                                labelAlignment="left"
                                required
                                // onChange={categoryChange}
                                id="picklist-3"
                                placeholder="Choose Building"
                                enableSearch
                            >
                                <Option className={styles.optionForm} name="form 1" label="Create Category" icon={<AddCircleIcon className={styles.circleIcon} />} />
                                <Option name="header" label="Pick Category" variant="header" />
                                <Option value="income" name="option 3" label="Income" />
                                <Option name="thing" label="No Categories" disabled />
                            </Picklist>
                        </div>
                    </div>
                </div>
                <div className={styles.inputs}>
                    <Input
                        label="Income"
                        name="income"
                        id="income"
                        placeholder="Income"
                        labelAlignment="left"
                        value={income}
                        onChange={incomeChange}
                    />
                </div>
                <div className={styles.inputs}>
                    <Input
                        label="Debit"
                        name="debit"
                        id="debit"
                        placeholder="Debit"
                        labelAlignment="left"
                        value={debit}
                        onChange={debitChange}
                    />
                </div>
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