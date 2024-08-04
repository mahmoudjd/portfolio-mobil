import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";
import { ExternalLink } from "./ExternalLink";

interface Props {
  link: string;
  name: string;
  color: string;
  icon: string;
}

const SocialElement = ({ link, name, color, icon }: Props) => {
  return (
    <View style={styles.element}>
      <ExternalLink href={link} style={styles.social}>
        <FontAwesome color={color} name={icon} style={styles.icon} />
        {"  "}
        <Text style={styles.socialName}>{name}</Text>
      </ExternalLink>
    </View>
  );
};

export default SocialElement;

const styles = StyleSheet.create({
  element: {
    backgroundColor: "rgb(31,41,55)",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  social: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  socialName: {
    fontSize: 24,
    color: "white",
  },
  icon: {
    fontSize: 36,
  },
});
