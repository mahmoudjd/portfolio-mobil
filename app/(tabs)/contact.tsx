import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import { contactInfos } from "@/data/contactInfo";
import SocialItem from "@/components/SocialItem";

export default function ContactScreen() {
  return (
    <View style={styles.container}>
      {contactInfos.map((socialItem) => (
        <SocialItem
          key={socialItem.name}
          link={socialItem.link}
          name={socialItem.name}
          color={socialItem.color}
          icon={socialItem.icon}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    backgroundColor: "rgb(17,24,34)",
  },
});
