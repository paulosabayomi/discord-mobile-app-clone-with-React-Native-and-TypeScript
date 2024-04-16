import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileIndexPage from "../profile-comps/ProfileIndex";
import AppearancePage from "../profile-comps/Appearance";
import useAppColor from "../../themed/useAppColor";

const Stack = createNativeStackNavigator();

const ProfileScreen = React.memo((props: any) => {
    const colorMode = useAppColor()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: colorMode.inverseWhiteLightGray
            },
            headerTitleStyle: {
                color: colorMode.inverseBlack
            }
        }}>
            <Stack.Screen name="Overview" options={{headerShown: false}} component={ProfileIndexPage} />
            <Stack.Screen name="Appearance" component={AppearancePage} />
        </Stack.Navigator>
    )
})


export default ProfileScreen;