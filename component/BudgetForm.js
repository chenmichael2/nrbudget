import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DatePicker, Input, Picklist, Option, Modal, GlobalHeader } from "react-rainbow-components"; //react rainbow
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
                <div className="rainbow-m-bottom_xx-large rainbow-p-bottom_xx-large">
                    {/* <GlobalHeader
                        src="images/user/user1.jpg"
                        className="rainbow-p-bottom_xx-large rainbow-m-bottom_xx-large"
                    > */}
                        <div className="rainbow-flex rainbow-align_right">
                            <Picklist
                                label="Category"
                                labelAlignment="left"
                                required
                                id="picklist-3"
                                placeholder="Choose Building"
                                // onChange={value => setState({ value })}
                                enableSearch
                            >
                                <Option name="option 1" label="All Buildings" />
                                <Option name="option 2" label="New Building" />
                                <Option name="header" label="Your Buildings" variant="header" />
                                <Option name="option 3" label="Experimental" />
                                <Option name="option 4" label="Bennet Towers" />
                                <Option name="option 5" label="Empire State" />
                                <Option name="option 6" label="Central Park" />
                                <Option name="option 7" label="Chrysler" />
                                <Option name="option 8" label="Plaza" />
                            </Picklist>
                        </div>
                    {/* </GlobalHeader> */}
                </div>
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