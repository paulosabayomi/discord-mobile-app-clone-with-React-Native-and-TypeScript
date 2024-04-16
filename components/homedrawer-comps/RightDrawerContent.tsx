import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { TText } from "../../themed/themeComponents";
import useAppColor from "../../themed/useAppColor";
import { useAppSelector } from "../../shared/rdx-hooks";
// @ts-ignore
import HashSignIcon from '../../assets/channelText.svg';
// @ts-ignore
import HashMessageBox from '../../assets/channelTextThread.svg';
// @ts-ignore
import PinIcon from '../../assets/pin.svg';
// @ts-ignore
import NotificationLogo from '../../assets/guildNotificationSettings.svg'
// @ts-ignore
import SettingsLogo from '../../assets/guildServerSettings.svg'
// @ts-ignore
import InvitePersonIcon from '../../assets/guildInvitePeople-gray.svg'
import { FastImageRes } from "../../shared/Reusables";

const RightDrawerContent = React.memo((props: any) => {
    const channelData = useAppSelector(state => state.main.channelData);
    const colorMode = useAppColor();
    const user_profile = useAppSelector(state => state.main.userProfile);
    
    return (
        <View style={{backgroundColor: colorMode.inverseWhiteGray}}>
            <RightDrawerHeader title={channelData?.title} />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomWidth: .5,
        borderBottomColor: 'lightgray', paddingBottom: 10, marginBottom: 15}}>
                <View style={{ alignItems: 'center'}}>
                    <HashMessageBox width={25} height={25} />
                    <TText style={{marginTop: 8}}>
                        Threads
                    </TText>
                </View>
                <View style={{ alignItems: 'center'}}>
                    <PinIcon width={25} height={25} />
                    <TText style={{marginTop: 8}}>
                        Pins
                    </TText>
                </View>
                <View style={{ alignItems: 'center'}}>
                    <NotificationLogo width={25} height={25} />
                    <TText style={{marginTop: 8}}>
                        Notifications
                    </TText>
                </View>
                <View style={{ alignItems: 'center'}}>
                    <SettingsLogo width={25} height={25} />
                    <TText style={{marginTop: 8}}>
                        Settings
                    </TText>
                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginBottom: 20}}>
                <View style={{backgroundColor: colorMode.appLightGray, width: 35, height: 35, borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <InvitePersonIcon width={18} height={18} />
                </View>
                <TText fontFamily="medium" style={{color: colorMode.inverseBlack, fontSize: 18, marginLeft: 15}}>Invite Members</TText>
            </View>

            <TText style={{paddingHorizontal: 15, marginBottom: 20}} fontFamily="bold">ONLINE - 1</TText>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                <View style={{backgroundColor: colorMode.appLightGray, width: 35, height: 35, overflow: 'hidden', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <FastImageRes uri="https://unsplash.it/400/400?image=1" />
                </View>
                <TText fontFamily="medium" style={{color: colorMode.inverseBlack, fontSize: 18, marginLeft: 15}}>
                    {user_profile.name}
                </TText>
            </View>
        </View>
    )
})

const RightDrawerHeader = React.memo((props: {title: string}) => {
    const colorMode = useAppColor();

    return (
        <TouchableOpacity style={styles.listHeader}>
            <HashSignIcon width={25} height={25} />
            <TText fontFamily="bold" style={{color: colorMode.inverseBlack, fontSize: 20, marginLeft: 10}}>{props.title}</TText>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    mainList: {
        height: '100%', 
        width: '78%', 
        borderTopLeftRadius: 10, 
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    listHeader: {
        width: '100%', 
        height: 50, 
        borderTopLeftRadius: 10, 
        paddingHorizontal: 10, 
        flexDirection: 'row', 
        alignItems: 'center',
        borderTopRightRadius: 10,
        marginBottom: 10,
        borderBottomWidth: .5,
        borderBottomColor: 'lightgray'
        
    }
})

export default RightDrawerContent;