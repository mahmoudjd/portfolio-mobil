import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { StatusBar } from "expo-status-bar";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "rgb(31,41,55)",
        },
        tabBarActiveTintColor: "rgb(34, 197, 94)",
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerTintColor: "#fefefe",
          headerStyle: {
            backgroundColor: "rgb(31,41,55)",
          },
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          headerTintColor: "#fefefe",
          headerStyle: {
            backgroundColor: "rgb(31,41,55)",
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="folder-open" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="skills"
        options={{
          title: "Skills",
          headerTintColor: "#fefefe",
          headerStyle: {
            backgroundColor: "rgb(31,41,55)",
          },
          tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          headerTintColor: "#fefefe",
          headerStyle: {
            backgroundColor: "rgb(31,41,55)",
          },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="address-book" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
