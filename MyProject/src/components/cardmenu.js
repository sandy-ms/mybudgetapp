import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ data }) => {
    return (
        <View style={styles.card}>
            {data.map((item, index) => (
                <View style={styles.cardItem} key={index}>
                    <Ionicons name={item.iconName} size={24} color="#333" />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        width: 300,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    cardItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
    },
});

export default Card;