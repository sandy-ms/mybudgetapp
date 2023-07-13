import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionList from './TransactionList';

const SettingsScreen = () => {
    const transactions = [
        {
            id: 1,
            amount: 50,
            datetime: new Date().toLocaleString(),
            label: 'Expense 1',
            comment: 'Sample comment',
            category: 'Category 1',
        },
        // Add more transactions as needed
    ];
    return (
        <View style={styles.container}>
            <TransactionList transactions={transactions} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingsScreen;
