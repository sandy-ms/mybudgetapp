import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import moment from 'moment';

const TransactionPage = () => {
    const [transactions, setTransactions] = useState([
        { id: 1, amount: 50, datetime: new Date(), label: 'Expense 1', comment: 'Comment 1', category: 'Category 1' },
        { id: 2, amount: 100, datetime: new Date(), label: 'Expense 2', comment: 'Comment 2', category: 'Category 2' },
        { id: 3, amount: 75, datetime: new Date(), label: 'Expense 3', comment: 'Comment 3', category: 'Category 3' },
    ]);

    const tableHead = ['Amount', 'Datetime', 'Label', 'Comment', 'Category'];
    const tableData = transactions.map((transaction) => [
        `$${transaction.amount}`,
        moment(transaction.datetime).format('YYYY-MM-DD HH:mm'),
        transaction.label,
        transaction.comment,
        transaction.category,
    ]);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Table borderStyle={styles.tableBorder}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.headText} />
                    {tableData.map((rowData, index) => (
                        <TableWrapper key={index} style={styles.row}>
                            {rowData.map((cellData, cellIndex) => (
                                <Cell key={cellIndex} data={cellData} />
                            ))}
                        </TableWrapper>
                    ))}
                </Table>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    tableBorder: { borderWidth: 1, borderColor: '#C1C0B9' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    headText: { margin: 6, fontWeight: 'bold', textAlign: 'center' },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
});

export default TransactionPage;
