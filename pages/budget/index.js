import styles from "../../styles/Budget.module.css";
import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Budget() {

    return (
        <div className={styles.pageContainer}>
            <h1>Budget Page</h1>
            <div className={styles.mainContainer}>
                <div className={styles.budgetContainer}>
                    <h1>Welcome User!</h1>
                    <table className={styles.table}>
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
                    </table>
                    <Table></Table>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Month</TableCell>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Description</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                    <TableRow
                                        key="name"
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            name
                                        </TableCell>
                                        <TableCell align="right">one</TableCell>
                                        <TableCell align="right">two</TableCell>
                                        <TableCell align="right">three</TableCell>
                                        <TableCell align="right">four</TableCell>
                                    </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className={styles.infoContainer}>
                    <h1>Info Section</h1>
                </div>
            </div>
        </div>
    )
}

export default Budget;