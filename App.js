import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "./CheckBox";

export default function App() {
	const [music, setMusic] = useState(false);
	const [dancing, setDancing] = useState(false);
	const [reading, setReading] = useState(false);

	return (
		<View style={styles.container}>
			<Text style={{fontSize:20}}>CHECKBOX {'\n'} using CUSTOM Component{'\n'}</Text>
			<CheckBox
				onPress={() => setMusic(!music)}
				title="Music"
				isChecked={music}
			/>
			<CheckBox
				onPress={() => setDancing(!dancing)}
				title="Dancing"
				isChecked={dancing}
			/>
			<CheckBox
				onPress={() => setReading(!reading)}
				title="Reading"
				isChecked={reading}
			/>
		</View>
	);
	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#A1E3D8",
		justifyContent: "center",
		alignItems: "center",
	},
});
