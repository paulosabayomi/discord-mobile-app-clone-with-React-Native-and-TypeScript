import React from "react";
import { View } from "react-native";
import ServerList from "./ServerList";
import ChannelList from "./ChannelList";
import useAppColor from "../../themed/useAppColor";

const LeftDrawerContent = React.memo((props: any) => {
    const colorMode = useAppColor();

    return (
        <View {...props.dProps} style={{flex: 1, flexDirection: 'row', backgroundColor: colorMode.appLightGray}}>
            <ServerList />
            <ChannelList navigation={props.dProps.navigation} />
        </View>
    )
})

export default LeftDrawerContent;