import { View } from "react-native";
import { Link, Stack } from "expo-router";

export default function MainScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Use the `Screen` component to configure the layout. */}
      <Stack.Screen options={{ title: "Main Screen" }} />
      {/* Use the `Link` component to enable optimized client-side routing. */}
      <Link href="/home">Go Back to Home</Link>
    </View>
  );
}