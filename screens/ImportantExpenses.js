import { View, StyleSheet } from 'react-native';
import ExpensesList from '../components/ExpensesList';
import { GlobalColors } from '../constants/styles';
import { useState, useEffect } from "react";
// import { collection, onSnapshot } from 'firebase/firestore';
import { queryExpenseImportant } from '../firebase/firestore';

import React from 'react';

function AllExpenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    load();
    // const unsubscribe = onSnapshot(
    //   collection(firestore, "expenses"),
    //   (querySnapshot) => {
    //     if (querySnapshot.empty) {
    //       setExpenses([]);
    //       return;
    //     }
    //     setExpenses(
    //       querySnapshot.docs.map((snapDoc) => {
    //         let data = snapDoc.data();
    //         data = { ...data, key: snapDoc.id };
    //         return data;
    //       })
    //     );
    //   }
    // );
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  const load = async () => {
    let res = await queryExpenseImportant();
    console.log("res", res);

    let list = res.docs.map((snapDoc) => {
      let data = snapDoc.data();
      data = { ...data, id: snapDoc.id };
      return data;
    })
    console.log("list", list);
    setExpenses(list);
  }

  return (
    <View style={styles.container}>
      <ExpensesList
        expenses={expenses}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalColors.colors.mediumpurple,
    flex: 1,
  },
});

export default AllExpenses;