import React from "react";
import { TextInput, TextStyle, TouchableOpacity } from "react-native";
import { ImageStyle } from "react-native";
import {
	StyleSheet,
	Text,
	View,
	ViewStyle,
	StyleProp,
	Image,
	Dimensions,
	ActivityIndicator,
} from "react-native";
import { useFonts, Adamina_400Regular } from "@expo-google-fonts/adamina";
import { AntDesign } from "@expo/vector-icons";

interface SignupScreenProps {
	containerStyle?: StyleProp<ViewStyle>;
	headerStyle?: StyleProp<ViewStyle>;
	logoStyle?: StyleProp<ImageStyle>;
	logoTextStyle?: StyleProp<TextStyle>;
	mainTextStyle?: StyleProp<TextStyle>;
	googleButtonStyle?: StyleProp<ViewStyle>;
	googleIconStyle?: StyleProp<ImageStyle>;
	twitterIconStyle?: StyleProp<ImageStyle>;
	buttonsStyle?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<ViewStyle>;
	signupButtonStyle?: StyleProp<ViewStyle>;
	dividerStyle?: StyleProp<ViewStyle>;
	btnTextStyle?: StyleProp<ViewStyle>;
	redirectTextStyle?: StyleProp<TextStyle>;
	redirectTextLinkStyle?: StyleProp<ViewStyle>;
	rowStyle?: StyleProp<ViewStyle>;
}

const SignupScreen: React.FC<SignupScreenProps> = (props) => {
	let [fontsLoaded] = useFonts({
		Adamina_400Regular,
	});

	if (!fontsLoaded) {
		return <ActivityIndicator size="small" color="#0000ff" />;
	} else {
		return (
			<View style={[styles.container, props.containerStyle]}>
				<View style={[styles.header, props.headerStyle]}>
					<Image
						source={require("../assets/logo.png")}
						style={[styles.logo, props.logoStyle]}
					/>
					<Text style={[styles.logoText, props.logoTextStyle]}>
						Aviate Coders{" "}
					</Text>
				</View>
				<Text style={[styles.mainText, props.mainTextStyle]}>
					Become An Aviated Coder
				</Text>
				<View style={[styles.buttonContainer, props.buttonsStyle]}>
					<TouchableOpacity
						onPress={() => console.log("hola")}
						style={[styles.googleButton, props.googleButtonStyle]}
					>
						<Image
							source={require("../assets/google.png")}
							style={[styles.googleIcon, props.googleIconStyle]}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => console.log("hola")}
						style={[styles.googleButton, props.googleButtonStyle]}
					>
						<AntDesign
							// style={[styles.twitterIcon, props.twitterIconStyle]}
							name="twitter"
							size={24}
							color="#5DA9DD"
						/>
					</TouchableOpacity>
				</View>
				<TextInput
					style={[styles.input, props.inputStyle]}
					placeholder="Name"
				/>
				<TextInput
					style={[styles.input, props.inputStyle]}
					placeholder="Password"
					secureTextEntry={true}
					autoCapitalize="none"
				/>
				<TextInput
					style={[styles.input, props.inputStyle]}
					placeholder="Email"
				/>
				<TouchableOpacity
					onPress={() => console.log("hola")}
					style={[styles.signupButton, props.signupButtonStyle]}
				>
					<Text style={[styles.btnText, props.btnTextStyle]}>Sign up</Text>
				</TouchableOpacity>
				<View style={[styles.divider, props.dividerStyle]} />
				<View style={[styles.row, props.rowStyle]}>
					<Text style={[styles.redirectText, props.redirectTextStyle]}>
						Already have an account?
					</Text>
					<TouchableOpacity onPress={() => console.log("hola")}>
						<Text
							style={[styles.redirectTextLink, props.redirectTextLinkStyle]}
						>
							Login
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
};

interface Styles {
	container: ViewStyle;
	logo: ImageStyle;
	header: ViewStyle;
	logoText: TextStyle;
	googleButton: ViewStyle;
	googleIcon: ImageStyle;
	divider: ViewStyle;
	mainText: TextStyle;
	buttonContainer: ViewStyle;
	input: ViewStyle;
	signupButton: ViewStyle;
	btnText: ViewStyle;
	redirectText: TextStyle;
	redirectTextLink: ViewStyle;
	row: ViewStyle;
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.1;

const styles = StyleSheet.create<Styles>({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	logo: {
		height: height_logo * 0.6,
		width: height_logo,
		resizeMode: "contain",
	},
	header: {
		flexDirection: "row",
		alignItems: "center",
	},
	logoText: {
		fontFamily: "Adamina_400Regular",
		fontWeight: "500",
		fontSize: 22,
	},
	googleButton: {
		width: 131,
		height: 54,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		backgroundColor: "#ffffff",
		padding: 10,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOpacity: 0.5,
		elevation: 10,
		shadowRadius: 20,
		shadowOffset: { width: 10, height: 15 },
	},
	googleIcon: {
		height: height_logo * 0.3,
		width: height_logo,
		resizeMode: "contain",
	},

	mainText: {
		fontFamily: "Adamina_400Regular",
		fontWeight: "500",
		fontSize: 25,
		marginTop: 50,
	},
	buttonContainer: {
		marginTop: 50,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: `80%`,
	},
	input: {
		width: `80%`,
		fontSize: 16,
		fontFamily: "Adamina_400Regular",
		borderRadius: 12,
		backgroundColor: "#ffffff",
		padding: 15,
		shadowColor: "rgba(0, 0, 0, 0.1)",
		shadowOpacity: 0.5,
		elevation: 10,
		shadowRadius: 20,
		shadowOffset: { width: 10, height: 15 },
		marginTop: 40,
	},
	signupButton: {
		width: `80%`,
		backgroundColor: "#1E2E46",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 12,
		marginTop: 40,
		padding: 12,
	},
	btnText: {
		textAlign: "center",
		fontSize: 23,
		fontFamily: `Adamina_400Regular`,
		color: "#fff",
	},
	divider: {
		borderWidth: 0.5,
		borderColor: "black",
		margin: 10,
	},
	redirectText: {
		fontSize: 18,
		fontFamily: `Adamina_400Regular`,
	},
	redirectTextLink: {
		fontFamily: `Adamina_400Regular`,
		fontSize: 18,
		color: "purple",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "70%",
	},
});

export default SignupScreen;
