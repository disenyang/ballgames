import { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import Input from './Input';
import React from 'react';

function ExpenseForm({ onSubmit, onCancel }) {

  const [inputs, setInputs] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');


  function resetInputHandler() {
    setInputs('');
  }

  function changeInputHandler(enteredValue) {
    setInputs(enteredValue);
  }

  function submitHandler() {
    const expenseData = {
      amount: amount,
      description: description,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !descriptionIsValid) {
      Alert.alert(
        "Invalid amount or description",
        "Please enter valid amount or description",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: resetInputHandler
          }
        ]
      );
    } else {
      onSubmit(expenseData);
    }
  }

  return (
    <TouchableOpacity onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={StyleSheet.form}>
        <Text style={StyleSheet.title}>Your Expense</Text>
        <Input
          label="Amount"
          textInputConfig={{
            keyboardType: 'decimal-pad',
            'onChangeText': ((text) => {
              setAmount(text)
            }),
            value: amount
          }}
        />
        <Input
          label="Description"
          textInputConfig={{
            multiline: true,
            onChangeText: (text) => {
              setDescription(text)
            },
            value: description
          }}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title='Cancel' mode="flat" onPress={() => {
              onCancel();
            }}>

            </Button>
          </View>
          <Button title='Submit' style={styles.button} onPress={submitHandler}>

          </Button>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  form: {
    marginTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8
  }
});

export default ExpenseForm;