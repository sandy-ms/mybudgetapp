import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from 'react-native-dropdown-picker';


const TransactionPage = () => {
    const [expenseAmount, setExpenseAmount] = useState('');
    const [datetime, setDatetime] = useState(new Date());
    const [label, setLabel] = useState('');
    const [comment, setComment] = useState('');
    const [category, setCategory] = useState(null);
    const [showDatetimePicker, setShowDatetimePicker] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Expense Amount"
                value={expenseAmount}
                onChangeText={(text) => setExpenseAmount(text)}
                keyboardType="numeric"
            />
            <Button title="Select Date" onPress={() => setShowDatetimePicker(true)} />
            {showDatetimePicker && (
                <DateTimePicker
                    value={datetime}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        const currentDate = selectedDate || datetime;
                        setShowDatetimePicker(false);
                        setDatetime(currentDate);
                    }}
                />
            )}
            <TextInput
                style={styles.input}
                placeholder="Label"
                value={label}
                onChangeText={(text) => setLabel(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Comment"
                value={comment}
                onChangeText={(text) => setComment(text)}
            />
            <DropDownPicker
                items={[
                    { label: 'Category 1', value: 'category1' },
                    { label: 'Category 2', value: 'category2' },
                    { label: 'Category 3', value: 'category3' },
                ]}
                defaultValue={category}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={styles.dropdownItem}
                dropDownStyle={styles.dropdownMenu}
                onChangeItem={(item) => setCategory(item.value)}
                placeholder="Select Category"
            />
            <Button title="Submit" onPress={handleTransactionSubmit} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    dropdownContainer: {
        height: 40,
        marginBottom: 10,
    },
    dropdown: {
        backgroundColor: '#fafafa',
    },
    dropdownItem: {
        justifyContent: 'flex-start',
    },
    dropdownMenu: {
        backgroundColor: '#fafafa',
    },
});

const handleTransactionSubmit = () => {
    const transaction = {
        expenseAmount,
        datetime,
        label,
        comment,
        category,
    };

onAddExpense(newExpense)
setExpenseAmount('')
setDatetime('')
setLabel('')
setComment('')
setCategory('')};

export default TransactionPage;
