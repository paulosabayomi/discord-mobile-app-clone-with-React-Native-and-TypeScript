import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import useAppColor from "../../themed/useAppColor";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TText } from "../../themed/themeComponents";
// @ts-ignore
import Dots from '../../assets/guildMoreOptions1.svg'
// @ts-ignore
import InvitePersonIcon from '../../assets/guildInvitePeople.svg'
import { ChannelListSection, ChannelListitem } from "../../shared/Reusables";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { FlashList } from "@shopify/flash-list";
import { ChannelListContext } from "../../shared/constants";
import { setChannelData } from "../../shared/rdx-slice";

const ChannelList = React.memo((props: any) => {
    const colorMode = useAppColor();
    const channelData = useAppSelector(state => state.main.serverData)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        if (Object.keys(channelData).length > 0) { // added after the video
            dispatch(setChannelData(channelData?.channels?.[0]?.items?.[0]));
        }
    }, [channelData]) // added after the video

    return (
        <ChannelListContext.Provider value={{navigation: props.navigation}}>
            <View style={[styles.mainList, {backgroundColor: colorMode.inverseWhiteGray,}]}>
                <ServerListHeader title={channelData.title} />
                {
                    channelData.id !== 0 &&
                    <InviteOthers />
                }
                {
                    channelData.id !== 0 && 
                    <FlashList
                        data={[{}]}
                        renderItem={({ item }) => <>
                                {
                                    channelData.channels?.map(channel => 
                                        <ChannelListSection data={channel} />
                                    )
                                }
                        </>}
                        estimatedItemSize={200}
                    />
                }
                {
                    channelData.id === 0 && 
                    <FlashList
                        data={[{}]}
                        renderItem={({ item }) => <>
                                {
                                    channelData.channels[0]?.items.map((item, i) => 
                                        <ChannelListitem image="https://unsplash.it/400/400?image=1" data={item} />
                                    )
                                }
                        </>}
                        estimatedItemSize={200}
                    />
                } 
                
            </View>
        </ChannelListContext.Provider>
    )
});

const ServerListHeader = React.memo((props: {title: string}) => {
    const colorMode = useAppColor()

    return (
        <TouchableOpacity style={styles.listHeader}>
            <TText fontFamily="bold" style={{color: colorMode.inverseBlack, fontSize: 18}}>{props.title}</TText>
            <Dots width={30} height={30} />
        </TouchableOpacity>
    )
});


const InviteOthers = React.memo((props: any) => {
    return (
        <View style={{width: '100%', alignItems: 'center', marginBottom: 30}}>
            <TouchableHighlight style={{backgroundColor: 'gray', width: '85%', height: 30, borderRadius: 4, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <>
                    <InvitePersonIcon width={20} height={20} />
                    <TText style={{color: 'white', fontSize: 14, marginLeft: 10}} fontFamily="semiBold">Invite</TText>
                </>
            </TouchableHighlight>
        </View>
    )
})

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
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderTopRightRadius: 10,
        marginBottom: 10
    }
})

export default ChannelList;