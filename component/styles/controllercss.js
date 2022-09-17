import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        position: "absolute",
        bottom: 0,
        zIndex: 9999,
        borderColor: "#000",
        borderTopWidth: 1,
    },

    // Children
    child: {
        paddingTop: 4,
        paddingBottom: 4,
        padding: 2,
    },
    content: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
    },
});

export default style;
