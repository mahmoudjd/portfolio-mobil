import React, { useMemo } from "react";
import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { projects } from "@/data/projects";
import { ExternalLink } from "@/components/ExternalLink";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ProjectScreen = () => {
  const { id } = useLocalSearchParams();

  const project = useMemo(() => {
    return projects.find((p) => p.id.toString() === id);
  }, [id]);

  if (!project) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Project not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{project.title}</Text>
      <View style={styles.imageContainer}>
        <Image source={project.imageUrl} style={styles.image} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.subtitle}>Description:</Text>
        <Text style={styles.text}>{project.description}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.subtitle}>Technologies:</Text>
        {project.technologies.map((tech, index) => (
          <Text style={styles.text} key={index}>
            <FontAwesome name="circle" color="rgb(34, 197, 94)" size={10} />
            {" " + tech}
          </Text>
        ))}
      </View>
      <ExternalLink href={project.link} style={styles.link}>
        Show code on GitHub{" "}
        <FontAwesome name="github" color="rgb(75,85,99)" style={styles.icon} />
      </ExternalLink>
      <StatusBar style="light" />
    </ScrollView>
  );
};

export default ProjectScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(17,24,34)",
    paddingHorizontal: 20,
  },
  title: {
    textAlign: "center",
    marginVertical: 15,
    color: "rgb(34, 197, 94)",
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
    paddingVertical: 5,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: 325,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: 15,
  },
  subcontainer: {
    marginVertical: 10,
  },
  subtitle: {
    color: "rgb(34, 197, 94)",
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    color: "rgb(34,197,94)",
    fontWeight: "500",
    marginVertical: 20,
    fontSize: 20,
    borderColor: "rgb(34, 197, 94)",
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    textAlign: "center",
  },
  icon: {
    fontSize: 26,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 18,
  },
});
