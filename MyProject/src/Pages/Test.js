import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyComponent from '../components/dropdown';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#6200ee',
    },
};
const Test = () => {
    const data = [
        { key: 'Canada', value: 'Canada' },
        { key: 'England', value: 'England' },
        { key: 'Pakistan', value: 'Pakistan' },
        { key: 'India', value: 'India' },
        { key: 'NewZealand', value: 'NewZealand' },]
    return (
        <PaperProvider theme={theme}>
            <MyComponent data={data} />
        </PaperProvider>);
};

export default Test;
