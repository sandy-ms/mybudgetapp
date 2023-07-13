import React from 'react';
import { View, StyleSheet } from 'react-native';
import TransactionCard from './Transactioncard';

const TransactionList = ({ transactions }) => {
    return (
        <View style={styles.container}>
            {transactions.map((transaction) => (
                <TransactionCard key={transaction.id} {...transaction} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
});

export default TransactionList;
