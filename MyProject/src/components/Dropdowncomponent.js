import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectOption = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.selectedOption} onPress={toggleDropdown}>
                {selectedOption ? (
                    <>
                        <Image source={selectedOption.image} style={styles.optionImage} />
                        <Text style={styles.optionLabel}>{selectedOption.label}</Text>
                    </>
                ) : (
                    <Text style={styles.placeholder}>Select an option</Text>
                )}
            </TouchableOpacity>
            {isOpen && (
                <View style={styles.optionsContainer}>
                    {options.map((option, index) => (
                        <TouchableOpacity key={index} style={styles.option} onPress={() => selectOption(option)}>
                            <Image source={option.image} style={styles.optionImage} />
                            <Text style={styles.optionLabel}>{option.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 200,
    },
    selectedOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    placeholder: {
        color: '#999',
    },
    optionImage: {
        width: 20,
        height: 20,
        marginRight: 5,
    },
    optionLabel: {
        fontSize: 16,
    },
    optionsContainer: {
        position: 'absolute',
        top: '100%',
        left: 0,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginTop: 5,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});

export default Dropdown;
