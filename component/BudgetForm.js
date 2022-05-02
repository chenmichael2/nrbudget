import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { DatePicker, Input, Picklist, Option, Modal, GlobalHeader } from "react-rainbow-components"; //react rainbow
import styles from '../styles/BudgetForm.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
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
                    label="Date"
                    labelAlignment="left"
                    placeholder="Date"
                    className={styles.datePicker}
                />
                <Input
                    label="Description"
                    placeholder="Description"
                    required
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
                                isCentered={true}
                                // onChange={value => setState({ value })}
                                enableSearch
                            >
                                <Option name="form 1" label="Create Category" icon={<AddCircleIcon className={styles.circleIcon} />}/>
                                {/* icon={<AddFilledIcon />} */}
                                <Option name="header" label="Pick Category" variant="header" />
                                <Option name="option 3" label="Experimental" />
                            </Picklist>
                        </div>
                    {/* </GlobalHeader> */}
                </div>
                <Input
                    label="Income"
                    placeholder="Income"
                    labelAlignment="left"
                />
                <Input
                    label="Debit"
                    placeholder="Debit"
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