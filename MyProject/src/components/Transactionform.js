import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MyComponentdropdown from './dropdown'

import Dropdown from '../Pages/Testpage';
const Transactionform = () => {
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [label, setLabel] = useState('');
    const [comment, setComment] = useState('');
    const [dataList, setDataList] = useState([]);

    const handleCategoryChange = (value) => {
        setCategory(value);
    };

    const handleAmountChange = (value) => {
        setAmount(value);
    };

    const handleDateChange = (value) => {
        setDate(value);
    };

    const handleLabelChange = (value) => {
        setLabel(value);
    };

    const handleCommentChange = (value) => {
        setComment(value);
    };

    const handleSubmit = () => {
        const newData = {
            id: Date.now().toString(),
            category,
            amount,
            date,
            label,
            comment,
        };
        setDataList((prevDataList) => [...prevDataList, newData]);
        // Reset form values
        setCategory('');
        setAmount('');
        setDate('');
        setLabel('');
        setComment('');
    };

    const data = [
        { key: 'Canada', value: 'Canada' },
        { key: 'England', value: 'England' },
        { key: 'Pakistan', value: 'Pakistan' },
        { key: 'India', value: 'India' },
        { key: 'NewZealand', value: 'NewZealand' },
    ]

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>Category: {item.category}</Text>
            <Text>Amount: {item.amount}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Label: {item.label}</Text>
            <Text>Comment: {item.comment}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text>Category</Text>
                {/* <DropDownPicker
                    items={[
                        { label: 'Category 1', value: 'category1', icon: () => <Icon name="rocket" size={18} color="#900" /> },
                        { label: 'Category 2', value: 'category2', icon: () => <Icon name="heart" size={18} color="#900" /> },
                        { label: 'Category 3', value: 'category3', icon: () => <Icon name="smile-o" size={18} color="#900" /> },
                    ]}
                    defaultValue={category}
                    containerStyle={styles.dropdownContainer}
                    style={styles.dropdown}
                    itemStyle={styles.dropdownItem}
                    dropDownStyle={styles.dropdownMenu}
                    onChangeItem={(item) => handleCategoryChange(item.value)}
                    searchable={true}
                    searchablePlaceholder="Search for a category"
                    searchableError="No categories found"
                    placeholder="Select a category"
                /> */}
                {/* <View style={styles.dropdownContainer}> <MyComponentdropdown data={data} style={styles.dropdown} /></View> */}

                {/* <View>
                    <Dropdown />
                    <MyComponentdropdown /></View> */}
                {/* <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    value={amount}
                    onChangeText={handleAmountChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Date"
                    value={date}
                    onChangeText={handleDateChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Label"
                    value={label}
                    onChangeText={handleLabelChange}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Comment"
                    value={comment}
                    onChangeText={handleCommentChange}
                /> */}
                <View>
                    {/* <MyComponentdropdown style={styles.dropdown} /> */}
                </View>
                {/* <Button title="Submit" onPress={handleSubmit} /> */}
            </View>
            <FlatList
                data={dataList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                style={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    form: {
        marginBottom: 20,
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
        justifyContent: 'center',
    },
    dropdownMenu: {
        backgroundColor: '#fafafa',
    },
    list: {
        flex: 1,
    },
    item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
});

export default Transactionform;
