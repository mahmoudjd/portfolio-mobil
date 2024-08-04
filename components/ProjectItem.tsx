import { StyleSheet, Image, ImageSourcePropType } from "react-native";
import { ExternalLink } from "./ExternalLink";
import { View, Text } from "./Themed";

interface Props {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: ImageSourcePropType;
  link: string;
}

const ProjectItem = ({
  title,
  description,
  technologies,
  imageUrl,
  link,
}: Props) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.technologies}>{technologies.join(", ")}</Text>
        <ExternalLink href={link} style={styles.link}>
          view project
        </ExternalLink>
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
  },
  description: {
    fontSize: 14,
    color: "#ccc",
  },
  technologies: {
    fontSize: 14,
    fontWeight: "600",
    color: "#ccc",
  },
  link: {
    color: "rgb(34,197,94)",
    fontWeight: "500",
    marginTop: 5,
  },
});
