import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { GlobalColors } from '../constants/styles';
import React from 'react';
import { writeToDB } from '../firebase/firestore';
import ExpenseForm from '../components/ExpenseForm';
function AddExpense({ navigation }) {

  function cancelHandler() {
    navigation.replace("ExpensesOverview");
  }


  async function onDelete(deletedKey) {
    console.log("delete pressed ", deletedKey);
    // setGoals(
    //   goals.filter((goal) => {
    //     return goal.key != deletedKey;
    //   })
    // );
    await deleteFromDB(deletedKey);

  }

  const confirmHandler = async ({ amount, description }) => {
    await writeToDB({ amount: parseInt(amount), description, important: false });
    Alert.alert(
      "Success"
    );
  }


  return (
    <View style={styles.container}>
      <ExpenseForm
        onSubmit={confirmHandler}
        onCancel={cancelHandler}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: GlobalColors.colors.mediumpurple
  }
});

export default AddExpense;