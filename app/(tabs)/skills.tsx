import { StyleSheet, FlatList } from "react-native";
import { View } from "@/components/Themed";
import { skills } from "@/data/skills";
import SkillItem from "@/components/SkillItem";

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={skills}
        renderItem={({ item }) => (
          <SkillItem category={item.category} details={item.details} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default SkillsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "rgb(17,24,34)",
  },
});
