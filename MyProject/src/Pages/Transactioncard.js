import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const TransactionCard = ({ amount, datetime, label, comment, category }) => {
    return (
        <Card style={styles.card}>
            <Card.Content>
                <Title>{label}</Title>
                <Paragraph>Amount: {amount}</Paragraph>
                <Paragraph>Datetime: {datetime}</Paragraph>
                <Paragraph>Category: {category}</Paragraph>
                <Paragraph>Comment: {comment}</Paragraph>
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        marginHorizontal: 20,
        elevation: 4,
    },
});

export default TransactionCard;
