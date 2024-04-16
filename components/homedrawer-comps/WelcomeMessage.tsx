import React from "react";
import { View } from "react-native";

// @ts-ignore
import HashSignIcon from '../../assets/channelText-white.svg';
// @ts-ignore
import EditIconBlue from '../../assets/guildEditServerProfile-blue.svg';

import { TText } from "../../themed/themeComponents";
import useAppColor from "../../themed/useAppColor";
import { FastImageRes } from "../../shared/Reusables";

const WelcomeMessage = React.memo((props: {channelTitle: string; serverId?: number; uri?: string}) => {
    const colorMode = useAppColor()
    return (
        <View style={{paddingHorizontal: 10, marginBottom: 30}}>
            <View style={{backgroundColor: 'rgb(80,80,80)', marginBottom: 10, width: 70, height: 70, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                {
                    props.uri ?
                    <View style={{width: 50, height: 50}}>
                        <FastImageRes uri={props.uri} />
                    </View>:
                    <HashSignIcon width={50} height={50} />
                }
            </View>
            <View style={{}}>
                <TText fontFamily="bold" style={{fontSize: 22,marginBottom: 10, color: colorMode.inverseBlack}}>
                    {props.serverId === 0 ? props.channelTitle : "Welcome to #" + props.channelTitle}
                </TText>
                <TText style={{fontSize: 14, color: colorMode.inverseBlack, marginBottom: 10,}}>
                    {props.serverId === 0 ? "This is the very beginning of your legandary conversation with " + props.channelTitle : "This is the start of the #" + props.channelTitle}
                </TText>
            </View>

            {
                props.serverId !== 0 &&
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <EditIconBlue width={20} height={20} />
                    <TText style={{color: '#3276c4', marginLeft: 10}}>Edit Channel</TText>
                </View>
            }

        </View>
    )
})

export default WelcomeMessage;