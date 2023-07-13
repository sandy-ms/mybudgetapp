import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TransactionPage from './TransactionPage';
import Dropdowntest from '../components/Dropdowncomponent';
import Dropedownmenu from '../components/dropdown'
import Transactionform from '../components/Transactionform';
const HomeScreen = () => {
    return (
        <Transactionform />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;
