import React from "react";
import { View } from "react-native";
import { FastImageRes } from "../../shared/Reusables";
import { TText } from "../../themed/themeComponents";
import useAppColor from "../../themed/useAppColor";

const NotifForYou = React.memo((props: any) => {
    const colorMode = useAppColor()
    return (
        <View style={{flex: 1, backgroundColor: colorMode.inverseWhiteLightGray}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 15}}>
                <View style={{width: 50, height: 50, borderRadius: 50, overflow: 'hidden', }}>
                    <FastImageRes uri="https://unsplash.it/400/400?image=1" />
                </View>
                <View style={{marginLeft: 15}}>
                    <TText fontFamily="medium" style={{color: colorMode.inverseBlack, fontSize: 17}}>
                        Test Community Session <TText>started in</TText> 
                        <TText style={{color: colorMode.inverseBlack}}>Test Server</TText> 
                    </TText>
                    <TText>5d</TText>
                </View>
            </View>

        </View>
    )
});

export default NotifForYou;