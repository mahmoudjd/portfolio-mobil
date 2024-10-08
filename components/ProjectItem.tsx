import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { View, Text } from "./Themed";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: ImageSourcePropType;
  link: string;
}

const ProjectItem = ({ id, title, description, technologies }: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          <FontAwesome
            name="folder-open-o"
            color="gray"
            size={24}
            style={{ marginRight: 8 }}
          />
          {" " + title}
        </Text>
        <Text style={styles.description}>
          Description: {description.substring(0, 150)}...
        </Text>
        <Text style={styles.technologies}>
          Technologies: {technologies.join(", ").substring(0, 25)}...
        </Text>
        <Link style={styles.link} href={`/${id}`}>
          view project
        </Link>
      </View>
    </View>
  );
};

export default ProjectItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "column",
    margin: 10,
    backgroundColor: "rgb(31,41,55)",
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
  },
  textContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgb(31,41,55)",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "rgb(34, 197, 94)",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 5,
  },
  technologies: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ccc",
  },
  link: {
    color: "rgb(34,197,94)",
    fontSize: 15,
    fontWeight: "500",
    marginVertical: 8,
    textAlign: "center",
    borderColor: "rgb(34,197,94)",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 5,
  },
});
