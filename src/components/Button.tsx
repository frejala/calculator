import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface ButtonProps {
  text: string;
  onPress: (value: string) => void;
  width?: number;
  height?: number | null;
  backgroundColor?: string;
  textColor?: string;
}

export default function Button({
  text,
  onPress,
  width = 0,
  height = null,
  backgroundColor = "#333333",
  textColor = "#ffffff",
}: ButtonProps) {
  const heightStyle = height ? { height } : { height: width };
  const widthStyle = { width };

  return (
    <View style={[styles.buttonContainer, widthStyle, heightStyle]}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor }]}
        onPress={() => onPress(text)}
      >
        <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
  },
  button: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
  },
});
