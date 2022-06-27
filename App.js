import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SelectedScroll from "./screens/SelectedScroll";
import MyStack from "./navigation/index";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
});
