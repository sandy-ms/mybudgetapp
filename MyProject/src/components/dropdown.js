import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Menu, Divider, Provider } from 'react-native-paper';
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list'


const MyComponentdropdown = ({ data }) => {
    const [selected, setSelected] = React.useState("");
    const [categories, setCategories] = React.useState([]);

    // const data = [
    //     { key: 'Canada', value: 'Canada' },
    //     { key: 'England', value: 'England' },
    //     { key: 'Pakistan', value: 'Pakistan' },
    //     { key: 'India', value: 'India' },
    //     { key: 'NewZealand', value: 'NewZealand' },
    // ]

    return (
        <Provider>
            <SelectList setSelected={setSelected} data={data} />

            <View style={{ marginTop: 50 }}>
                <Text>Selected Value : </Text>
                <Text style={{ marginTop: 10, color: 'gray' }}>{selected}</Text>
            </View>
        </Provider>
    );
};

const styles = {
    container: { flex: 1, padding: 16 },
};


export default MyComponentdropdown;