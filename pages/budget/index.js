import styles from "../../styles/Budget.module.css";
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import { DatePicker, Input } from "react-rainbow-components";

function Budget() {
    const [date, setDate] = useState(null);

    function onChange(date) {
        setDate(date);
      }

    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    {/* <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.month}>Month</th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Income</th>
                                <th>Debit</th>
                                <th>Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Month</td>
                                <td>Date</td>
                                <td>Description</td>
                                <td>Category</td>
                                <td>Income</td>
                                <td>Debit</td>
                                <td>Balance</td>
                            </tr>
                            <tr>
                                <td>Month</td>
                                <td>Date</td>
                                <td>Description</td>
                                <td>Category</td>
                                <td>Income</td>
                                <td>Debit</td>
                                <td>Balance</td>
                            </tr>
                        </tbody>
                    </table> */}
                    <TableContainer className={styles.tableContainer} component={Paper}>
                        <Table className={styles.budgetTable} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Income</TableCell>
                                    <TableCell>Debit</TableCell>
                                    <TableCell>Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    key="name"
                                >
                                    <TableCell>Date</TableCell>
                                    <TableCell className={styles.cellDescription}>Description</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Income</TableCell>
                                    <TableCell>Debit</TableCell>
                                    <TableCell>Balance</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className={styles.infoContainer}>
                    <div>
                        <h1>Info Section</h1>
                    </div>
                    <div>
                        <h1>form to submit</h1>
                        <Paper elevation={3}>
                            <form>
                                <DatePicker
                                    formatStyle="medium"
                                    id="datePicker-1"
                                    value={date}
                                    onChange={onChange}
                                    required
                                    error="Date required"
                                    isCentered={true}
                                    label="Date"
                                    labelAlignment="left"
                                    className={styles.datePicker}
                                /><br />

                                <label>Description:</label>
                                <Input /> <br />

                                <label>Category</label>
                                <label>Income</label>
                                <label>Debit</label>
                            </form>
                        </Paper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budget;