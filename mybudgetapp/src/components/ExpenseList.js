import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseList = ({ expenses }) => {
    return (
        <View style={styles.container}>
            {expenses.map((expense, index) => (
                <View key={index} style={styles.expenseContainer}>
                    <Text style={styles.category}>Category: {expense.category}</Text>
                    <Text style={styles.comment}>Comment: {expense.comment}</Text>
                    <Text style={styles.amount}>Amount: ${expense.expense}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    expenseContainer: {
        marginBottom: 10,
    },
    category: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    comment: {
        fontStyle: 'italic',
    },
    amount: {
        marginTop: 5,
    },
});

export default ExpenseList;
