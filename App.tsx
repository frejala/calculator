import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Button from "./src/components/Button";
import Result from "./src/components/Result";

export default function App() {
  const { width } = useWindowDimensions();
  const buttonContainerWidth = width / 4 - 5;

  return (
    <View style={styles.container}>
      <Result result="102.345" />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonsRow}>
          <Button
            text="C"
            width={buttonContainerWidth}
            backgroundColor="#A5A5A5"
            textColor="#000"
            onPress={(key) => console.log(key)}
          />
          <Button
            text="+/-"
            width={buttonContainerWidth}
            backgroundColor="#A5A5A5"
            textColor="#000"
            onPress={(key) => console.log(key)}
          />
          <Button
            text="%"
            width={buttonContainerWidth}
            backgroundColor="#A5A5A5"
            textColor="#000"
            onPress={(key) => console.log(key)}
          />
          <Button
            text="/"
            width={buttonContainerWidth}
            backgroundColor="#FF9500"
            textColor="#fff"
            onPress={(key) => console.log(key)}
          />
        </View>
        <View style={styles.buttonsRow}>
          <Button
            text="7"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="8"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="9"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="x"
            width={buttonContainerWidth}
            backgroundColor="#FF9500"
            textColor="#fff"
            onPress={(key) => console.log(key)}
          />
        </View>
        <View style={styles.buttonsRow}>
          <Button
            text="4"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="5"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="6"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="-"
            width={buttonContainerWidth}
            backgroundColor="#FF9500"
            textColor="#fff"
            onPress={(key) => console.log(key)}
          />
        </View>
        <View style={styles.buttonsRow}>
          <Button
            text="1"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="2"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="3"
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="+"
            width={buttonContainerWidth}
            backgroundColor="#FF9500"
            textColor="#fff"
            onPress={(key) => console.log(key)}
          />
        </View>
        <View style={styles.buttonsRow}>
          <Button
            text="0"
            width={width / 2 - 10}
            height={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="."
            width={buttonContainerWidth}
            onPress={(key) => console.log(key)}
          />
          <Button
            text="="
            width={buttonContainerWidth}
            backgroundColor="#FF9500"
            textColor="#fff"
            onPress={(key) => console.log(key)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
  },
  buttonsRow: {
    flexDirection: "row",
  },
});
