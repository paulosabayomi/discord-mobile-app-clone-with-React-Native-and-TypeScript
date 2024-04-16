import React from "react";
import { View } from "react-native";
import useAppColor from "../../themed/useAppColor";
import { TText } from "../../themed/themeComponents";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { setAppColorMode } from "../../shared/rdx-slice";
import { TAppColorMode } from "../../shared/types";
import storage from "../../shared/storage";
import { app_storage_key } from "../../shared/constants";

const AppearancePage = React.memo((props: any) => {
    const colorMode = useAppColor();
    const appColorModeState = useAppSelector(state => state.main.appColorMode);
    const dispatch = useAppDispatch()

    const handleSetColorMode = React.useCallback((mode: TAppColorMode) => {
        dispatch(setAppColorMode(mode))
        storage.save({
            key: app_storage_key,
            data: {
              mode
            }
          })
    }, [])

    return (
        <View style={{flex: 1, backgroundColor: colorMode.inverseWhiteLightGray}}>
            <View style={{height: 50, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 15, borderBottomColor: 'gray', borderBottomWidth: .5}}>
                <TText>THEME</TText>
            </View>
            <View style={{flexDirection: 'row', paddingVertical: 20, width: '100%', justifyContent: 'flex-end'}}>
                <View onTouchEnd={() => handleSetColorMode('dark')} style={[{width: 70, height: 70, marginRight: 15, borderRadius: 50, backgroundColor: 'gray', borderColor: 'gray', borderWidth: .5},
                appColorModeState == 'dark' && {borderWidth: 5, borderColor: colorMode.light_blurple,}
                ]}></View>
                <View onTouchEnd={() => handleSetColorMode('light')} style={[{width: 70, height: 70,  marginRight: 15, borderRadius: 50, backgroundColor: 'white', borderColor: 'gray', borderWidth: .5},
                    appColorModeState == 'light' && {borderWidth: 5, borderColor: colorMode.light_blurple,}]}></View>
            </View>
        </View>
    )
});

export default AppearancePage;