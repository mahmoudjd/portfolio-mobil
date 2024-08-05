import { View, Text } from "./Themed";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  category: string;
  details: string[];
}
const SkillItem = ({ category, details }: Props) => {
  return (
    <View style={styles.skillElem}>
      <Text style={styles.category}>
        <FontAwesome name="star-o" size={22} />
        {" " + category}
      </Text>
      <Text style={styles.details}>{details.join(", ")}</Text>
    </View>
  );
};

export default SkillItem;

const styles = StyleSheet.create({
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
