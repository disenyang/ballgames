import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalColors } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import Questions from './screens/Questions';
import ImportantExpenses from './screens/ImportantExpenses';
import AddExpense from './screens/AddExpense';
import EditExpense from './screens/EditExpense';

import React from 'react';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalColors.colors.slateblue },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalColors.colors.slateblue },
        tabBarActiveTintColor: GlobalColors.colors.gold,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('AddExpense');
            }}
          />
        )
      })}
    >
      <BottomTabs.Screen
        name="Questions"
        component={Questions}
        options={{
          title: 'Questions',
          tabBarLabel: 'Questions',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="help-circle" size={size} color={color} />
          )
        }}
      />

      <BottomTabs.Screen
        name="Games"
        component={ImportantExpenses}
        options={{
          title: 'Games',
          tabBarLabel: 'Games',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="game-controller" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name="Teams"
        component={ImportantExpenses}
        options={{
          title: 'Teams',
          tabBarLabel: 'Teams',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: GlobalColors.colors.slateblue },
            headerTintColor: 'white'
          }}
        >
          <Stack.Screen
            name="ExpensesOverview"
            component={ExpensesOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddExpense"
            component={AddExpense}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditExpense"
            component={EditExpense}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
