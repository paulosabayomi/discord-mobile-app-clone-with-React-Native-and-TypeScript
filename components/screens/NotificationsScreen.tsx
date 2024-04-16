import React from "react";
import { View } from "react-native";
import { TText } from "../../themed/themeComponents";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotifForYou from "../notif-comps/ForYou";
import MentionsNotif from "../notif-comps/Mentions";
import { useIsFocused } from "@react-navigation/native";
import { useAppDispatch } from "../../shared/rdx-hooks";
import useAppColor from "../../themed/useAppColor";
import { updateSafeAreaBg } from "../../shared/rdx-slice";

const Tab = createMaterialTopTabNavigator();

const NotificationsScreen = React.memo((props: any) => {
    const isFocused = useIsFocused();
    const dispatch = useAppDispatch()
    const colorMode = useAppColor()

    React.useEffect(() => {
        if (isFocused) {
            dispatch(updateSafeAreaBg(colorMode.inverseWhiteLightGray))
        }
    }, [isFocused]);

    return (
            <Tab.Navigator screenOptions={{
                tabBarStyle: {
                    backgroundColor: colorMode.inverseWhiteLightGray,
                },
                tabBarLabelStyle: {
                    color: colorMode.inverseBlack
                }
            }}>
                <Tab.Screen name="for-you" component={NotifForYou} />
                <Tab.Screen name="mentions" component={MentionsNotif} />
            </Tab.Navigator>
    )
})

export default NotificationsScreen;