import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Title from "./../component/Title";
const quizImg = require("./../assets/quizi.png");
const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Title titleText="Quizzler" />
      <View style={styles.bannerContainer}>
        <Image style={styles.banner} source={quizImg} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={styles.buttonText}>start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: "100%",
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    width: "100%",
    backgroundColor: "#1A759F",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
  },
});
