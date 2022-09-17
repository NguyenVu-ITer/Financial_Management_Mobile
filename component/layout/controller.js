import { View, Text } from "react-native";
import Children from "./compChild/controllerChild";

import style from "../styles/controllercss";

function Controller({ heightScreen, widthScreen }) {
    const wrapper = {
        width: widthScreen,
        ...style.wrapper,
    };

    return (
        <View style={wrapper}>
            <Children
                widthScreen={widthScreen}
                heightScreen={heightScreen}
                colorBG="blue"
                color="black"
                innerText="Home"
            />
            <Children
                widthScreen={widthScreen}
                heightScreen={heightScreen}
                colorBG="yellow"
                color="black"
                innerText="Explore"
            />
            <Children
                widthScreen={widthScreen}
                heightScreen={heightScreen}
                colorBG="red"
                color="black"
                innerText="Add"
            />
            <Children
                widthScreen={widthScreen}
                heightScreen={heightScreen}
                colorBG="purple"
                color="black"
                innerText="Friends"
            />
            <Children
                widthScreen={widthScreen}
                heightScreen={heightScreen}
                colorBG="violet"
                color="black"
                innerText="Info"
            />
        </View>
    );
}

export default Controller;
