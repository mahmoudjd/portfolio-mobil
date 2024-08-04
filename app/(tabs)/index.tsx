import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View } from "@/components/Themed";

const HomeScreen = () => {
  const infoData = [
    { label: "Age", value: "29" },
    { label: "Education", value: "Master of Science in Computer Science" },
    {
      label: "Bachelor's Degree",
      value: "Bachelor of Science in Computer Science",
    },
    { label: "University", value: "Trier University of Applied Science" },
    { label: "Nationalities", value: "German, Syrian" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.imgContainer}>
          <Image
            source={require("@/assets/images/mahmoud.jpeg")}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Mahmoud Al Jarad</Text>
          {infoData.map((item, index) => (
            <Text key={index} style={styles.text}>
              <Text style={styles.boldText}>{item.label}:</Text> {item.value}
            </Text>
          ))}
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(17, 24, 39)",
  },
  scrollView: {
    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "rgb(31,41,55)",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  image: {
    width: 375,
    height: 410,
    borderRadius: 5,
  },
  textContainer: {
    borderRadius: 5,
    width: 375,
    backgroundColor: "rgb(31,41,55)",
    padding: 12,
    alignItems: "flex-start",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    marginBottom: 8,
  },
  text: {
    color: "white",
    marginBottom: 8,
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HomeScreen;
