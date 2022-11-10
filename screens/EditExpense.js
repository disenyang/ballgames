import { View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { GlobalColors } from '../constants/styles';
import React from 'react';
import { writeToDB, deleteExpense, updateToDB } from '../firebase/firestore';
import ExpenseForm from '../components/ExpenseForm';
function EditExpense({ navigation, route }) {
  console.log(route, "route");
  function cancelHandler() {
    navigation.goBack();
  }


  const onDelete = async () => {
    await deleteExpense(route.params.id);
    navigation.replace("ExpensesOverview");
  }


  const onImportant = async () => {
    await updateToDB({
      amount: route.params.amount,
      description: route.params.description,
      important: true
    }, route.params.id);
    Alert.alert(
      "Success"
    );
    navigation.replace("ExpensesOverview");
  }

  const confirmHandler = async ({ amount, description }) => {
    await writeToDB({ amount: parseInt(amount), description, important: false });
    Alert.alert(
      "Success"
    );
  }


  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 10 }}>
        <Button title='Mark as important' mode="flat" onPress={() => {
          onImportant();
        }}>

        </Button>
      </View>
      <Button title='Delete' style={styles.button} onPress={() => {
        onDelete();
      }}>

      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: GlobalColors.colors.mediumpurple
  }
});

export default EditExpense;