import { StyleSheet, FlatList } from "react-native";

import { Text, View } from "@/components/Themed";
import { skills } from "@/data/skills";

interface Props {
  category: string;
  details: string[];
}
const SkillItem = ({ category, details }: Props) => {
  return (
    <View style={styles.skillElem}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.details}>{details.join(", ")}</Text>
    </View>
  );
};
export default function SkillsScreen() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: "rgb(17,24,34)",
  },
  skillElem: {
    borderRadius: 8,
    marginVertical: 10,
    padding: 12,
    backgroundColor: "rgb(31,41,55)",
  },
  category: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(34, 197, 96)",
  },
  details: {
    marginTop: 8,
    fontWeight: "600",
    fontSize: 16,
    color: "#ccc",
  },
});
