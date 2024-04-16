import React from "react";
import { View } from "react-native";
import { FastImageRes } from "../../shared/Reusables";
import { TText } from "../../themed/themeComponents";
import useAppColor from "../../themed/useAppColor";
import { TMessage } from "../../shared/types";

const MessageBox = React.memo((props: {data: TMessage}) => {
    const colorMode = useAppColor();

    return (
        <View key={Math.floor(Math.random() * 9999999).toString()} style={{flexDirection: 'row', paddingHorizontal: 10, marginBottom: 25, alignItems: 'center'}}>
            <View style={{width: 40, height: 40, borderRadius: 50, overflow: 'hidden'}}>
                <FastImageRes uri={props.data.user_details.image} />
            </View>
            <View style={{marginLeft: 15, justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'flex-end', marginBottom: 5}}>
                    <TText fontFamily="medium" style={{fontSize: 17, marginRight: 10, color: colorMode.inverseBlack}}>
                        {props.data.user_details.name}
                    </TText>
                    <TText style={{fontSize: 12}}>{props.data.datetime}</TText>
                </View>
                <View>
                    <TText style={{fontSize: 15}}>{props.data.message}</TText>
                </View>
            </View>
        </View>
    )
})

export default MessageBox;