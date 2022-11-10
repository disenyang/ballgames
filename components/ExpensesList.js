import { FlatList, StyleSheet } from 'react-native';
import ExpenseItem from "./ExpenseItem";
import React from 'react';

function renderExpenseItem(itemData) {
  console.log("itemData", itemData)
  return <ExpenseItem {...itemData.item} />
}
function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.key}
    />
  );
}

const styles = StyleSheet.create({});

export default ExpensesList;