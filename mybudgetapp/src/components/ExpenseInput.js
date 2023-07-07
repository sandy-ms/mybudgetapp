import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ExpenseInput = ({ onAddExpense }) => {
    const [expense, setExpense] = useState('');
    const [category, setCategory] = useState('');
    const [comment, setComment] = useState('');

    const handleAddExpense = () => {
        const newExpense = {
            expense,
            category,
            comment,
        };
        onAddExpense(newExpense);
        setExpense('');
        setCategory('');
        setComment('');
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Expense"
                value={expense}
                onChangeText={(text) => setExpense(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Category"
                value={category}
                onChangeText={(text) => setCategory(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Comment"
                value={comment}
                onChangeText={(text) => setComment(text)}
            />
            <Button title="Add Expense" onPress={handleAddExpense} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default ExpenseInput;
