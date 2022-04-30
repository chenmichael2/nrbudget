function BudgetTable() {
    return (
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
    )
}

export default BudgetTable;