/* eslint-disable prettier/prettier */
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text>Uber Clone</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
