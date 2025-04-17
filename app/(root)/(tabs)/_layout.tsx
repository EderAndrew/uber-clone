/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
import { Tabs } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function TabLayout() {
  <Tabs>
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="house" color={color} size={24} />
        ),
      }}
    />
  </Tabs>;
}
