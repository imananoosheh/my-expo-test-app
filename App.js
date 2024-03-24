import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export default function App() {
	const [timesPressed, setTimesPressed] = useState(0);
	return (
		<View style={styles.container}>
			<Text>My fist App is working yeaaaayyyyyy!</Text>
			<StatusBar style="auto" />
      <View style={styles.rippedEdgeTop} />
      <View style={styles.view}>
			<Pressable
				onPress={() => {
					setTimesPressed((current) => current + 1);
				}}
			>
				<Text style={styles.text}>
					useless Button clicked {"->"} {timesPressed}
				</Text>
			</Pressable>
      </View>
      <View style={styles.rippedEdgeBottom} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	view: {
    backgroundColor: "#212121",
    borderColor: "#0f0",
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
	},
  rippedEdgeTop: {
    // Simulate a ripped edge with irregular shapes, shadows, or images
    width: '100%',
    height: 10, // Adjust based on the visual effect you want
    backgroundColor: 'transparent',
    // Additional styling for the ripped effect
  },
  rippedEdgeBottom: {
    // Similar to rippedEdgeTop
    width: '100%',
    height: 10,
    backgroundColor: 'transparent',
    // Additional styling
  },
	text: {
		padding: 10,
		fontSize: 40,
		color: "#0F0",
	},
});
