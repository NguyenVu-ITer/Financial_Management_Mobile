import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";

import appStyle from "./style/appCss";
import Controller from "./component/layout/controller";

export default function App() {
    const widthScreen = Dimensions.get("window").width;
    const heightScreen = Dimensions.get("window").height;

    return (
        <View style={[appStyle.container, appStyle.greyBG]}>
            <Controller widthScreen={widthScreen} heightScreen={heightScreen} />
        </View>
    );
}
