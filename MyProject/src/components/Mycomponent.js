import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const MyComponent = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <View style={styles.container}>
            <DropDownPicker
                items={[
                    { label: 'Option 1', value: 'option1' },
                    { label: 'Option 2', value: 'option2' },
                    { label: 'Option 3', value: 'option3' },
                ]}
                defaultValue={selectedValue}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdown}
                itemStyle={styles.dropdownItem}
                dropDownStyle={styles.dropdownMenu}
                onChangeItem={(item) => setSelectedValue(item.value)}
                placeholder="Select an option"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    dropdownContainer: { height: 40, marginBottom: 10 },
    dropdown: { backgroundColor: '#fafafa' },
    dropdownItem: { justifyContent: 'flex-start' },
    dropdownMenu: { backgroundColor: '#fafafa' },
});


export default MyComponent;