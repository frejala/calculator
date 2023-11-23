import { View, Text, StyleSheet } from "react-native";

interface ResultProps {
  result: string;
}

export default function Result({ result }: ResultProps) {
  return (
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  displayContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
  },
  displayText: {
    fontSize: 70,
    color: "white",
  },
});
