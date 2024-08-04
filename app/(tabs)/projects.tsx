import React from "react";
import { FlatList, StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { projects } from "@/data/projects";
import ProjectItem from "@/components/ProjectItem";

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <ProjectItem
            title={item.title}
            description={item.description}
            technologies={item.technologies}
            imageUrl={item.imageUrl}
            link={item.link}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(17,24,34)",
    paddingVertical: 5,
  },
});
