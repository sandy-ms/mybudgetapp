import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ExpenseInput from './src/components/ExpenseInput';
import ExpenseList from './src/components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <View style={styles.container}>
      <ExpenseInput onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;
