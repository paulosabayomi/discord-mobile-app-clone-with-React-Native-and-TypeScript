import React from "react";
import { Dimensions, StyleSheet, View, TextInput } from "react-native";
import { TText } from "../../themed/themeComponents";
// @ts-ignore
import PlusIcon from '../../assets/guildAddRole.svg';
// @ts-ignore
import ChatGiftIcon from '../../assets/chatGiftNitro.svg';
// @ts-ignore
import SmilingFaceIcon from '../../assets/voiceReaction.svg';
// @ts-ignore
import MicrophoneIcon from '../../assets/microphone.svg';
// @ts-ignore
import SendButtonIcon from '../../assets/sendButton.svg';
// @ts-ignore
import AngleRightIcon from '../../assets/angle-right.svg';

import useAppColor from "../../themed/useAppColor";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { updateMessage } from "../../shared/rdx-slice";

const inputWidth = Dimensions.get('window').width * 0.6;
const inputWidthWhenHasInput = Dimensions.get('window').width * 0.7;


const ChatBox = React.memo((props: {channelTitle: string; channelId: number; serverId: number;}) => {
    const colorMode = useAppColor();
    const inputRef = React.useRef<any>();
    const [text, setText] = React.useState<string>('');
    const dispatch = useAppDispatch();
    const user_details = useAppSelector(state => state.main.userProfile)

    const handleSendMessage = React.useCallback(() => {
        if (text.length == 0) return;
        const message = {
            channelId: props.channelId,
            serverId: props.serverId,
            message: text,
            datetime: new Date().toLocaleString(),
            user_details: user_details,
        }
        dispatch(updateMessage(message));
        setText('')
    }, [text])

    return (
        <View style={{minHeight: 100, paddingTop: 10, paddingBottom: 30, flexDirection: 'row', paddingHorizontal: 10, alignItems: 'flex-start', justifyContent: 'space-between'}}>
                {
                    text.length > 0 ?
                    <View style={[styles.icon_container, {backgroundColor: colorMode.appLightGray }]}>
                        <AngleRightIcon width={18} height={18} />
                    </View>:
                    <>
                        <View style={[styles.icon_container, {backgroundColor: colorMode.appLightGray }]}>
                            <PlusIcon width={25} height={25} />
                        </View>
                        <View style={[styles.icon_container, {backgroundColor: colorMode.appLightGray }]}>
                            <ChatGiftIcon width={25} height={25} />
                        </View>
                    </>
                }
            <View style={{position: 'relative', justifyContent: 'center'}}>
                <TextInput 
                    placeholder={"Message #" + props.channelTitle}
                    multiline={true}
                    placeholderTextColor={colorMode.textGray}
                    onChangeText={setText}
                    defaultValue={text}
                    ref={inputRef}
                    style={[styles.inputStyle, text.length > 0 && {width: inputWidthWhenHasInput}, {backgroundColor: colorMode.appLightGray, color: colorMode.inverseBlack}]}
                />
                <SmilingFaceIcon width={25} height={25} style={{position: 'absolute', right: 10,}} />
            </View>
            <View style={[styles.icon_container, {backgroundColor: colorMode.appLightGray }]}>
                {
                    text.length > 0 ?
                    <View onTouchEnd={handleSendMessage} style={[styles.icon_container, {backgroundColor: colorMode.blurple, alignItems: 'center', justifyContent: 'center' }]}>
                        <SendButtonIcon width={18} height={18} />
                    </View>:
                    <MicrophoneIcon width={25} height={25} />
                }
            </View>
        </View>
    )
});

const styles = StyleSheet.create({
    icon_container: {
        width: 35, 
        height: 35, 
        borderRadius: 50, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    inputStyle: {
        minHeight: 35, 
        maxHeight: 100,
        width: inputWidth, 
        borderBottomWidth: 0, 
        borderRadius: 20,
        paddingLeft: 14,
        fontSize: 15,
        fontFamily: 'ggsans-Regular',
        paddingRight: 40,
        paddingTop: 10

    }
})

export default ChatBox;