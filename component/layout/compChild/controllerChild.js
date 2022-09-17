import { View, Text } from "react-native";
import style from "../../styles/controllercss";

function childControll({
    widthScreen,
    heightScreen,
    color,
    colorBG,
    innerText,
}) {
    const childStyle = {
        width: widthScreen / 5,
        height: widthScreen / 8,
        ...style.child,
    };

    const contentChild = {
        backgroundColor: colorBG,
        ...style.content,
    };

    const text = {
        color: color,
        ...style.text,
    };

    return (
        <View style={childStyle}>
            <View style={contentChild}>
                <Text style={text}>{innerText}</Text>
            </View>
        </View>
    );
}

export default childControll;
