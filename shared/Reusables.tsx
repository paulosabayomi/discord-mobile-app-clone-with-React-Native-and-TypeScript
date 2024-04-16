import React from "react";
import { View } from "react-native";
import FastImage from 'react-native-fast-image'
import { TText } from "../themed/themeComponents";

// @ts-ignore
import PlusIcon from '../assets/guildAddRole.svg';
// @ts-ignore
import AngleDownIcon from '../assets/guildDropdownMenu.svg';
// @ts-ignore
import HashSignIcon from '../assets/channelText.svg';
// @ts-ignore
import SpeakerIcon from '../assets/speaker.svg';

import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import useAppColor from "../themed/useAppColor";
import { FlashList } from "@shopify/flash-list";
import { TChannel, TChannelSection, TChannelType, TServerData } from "./types";
import { useAppDispatch } from "./rdx-hooks";
import { setChannelData, setServerData } from "./rdx-slice";
import { ChannelListContext } from "./constants";

export const ServerIcon = React.memo((props: {icon?: any; data: TServerData}) => {
    const colorMode = useAppColor();
    const dispatch = useAppDispatch();

    return (
        <View style={{width: '100%', alignItems: 'center', marginBottom: 10}} onTouchEnd={() => dispatch(setServerData(props.data))}>
            <View style={{height: 50, width: 50, borderRadius: 50, overflow: 'hidden', alignItems: 'center', justifyContent: 'center', backgroundColor: colorMode.inverseWhiteLightGray}}>
                {
                    props.icon ?
                    props.icon :
                    <FastImageRes uri={props.data.image} />
                }
            </View>
        </View>
    )
})

export const FastImageRes = React.memo(({uri}: {uri: string}) => {
    return (
        <FastImage
            style={{ width: '100%', height: '100%' }}
            source={{
                uri: uri,
                headers: { Authorization: 'someAuthToken' },
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
    )
})

export const ChannelListHeader = React.memo((props: {title: string}) => {
    return (
        <View  key={Math.floor(Math.random() * 9999999).toString()} style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
            <View style={{flexDirection: 'row'}}>
                <AngleDownIcon width={16} height={16} />
                <TText style={{textTransform: 'uppercase', fontSize: 15}} fontFamily="bold">
                    {props.title}
                </TText>
            </View>
            <PlusIcon width={20} height={20} />
        </View>
    )
})

export const ChannelListSection = React.memo((props: {data: TChannelSection}) => {
    return (
        <View key={Math.floor(Math.random() * 9999999).toString()} style={{width: '100%', paddingHorizontal: 8, marginBottom: 20}}>
            <ChannelListHeader title={props.data.category} />
            {
                props.data.items?.map(item => 
                    <ChannelListitem data={item} />
                )
            }
            
        </View>
    )
})

export const ChannelListitem = React.memo((props: {data: TChannel; image?: string;}) => {
    const dispatch = useAppDispatch()
    const useChannelListContentIn = React.useContext(ChannelListContext)

    const handleRouteData = React.useCallback(() => {
        dispatch(setChannelData({...props.data, image: props.image}));
        useChannelListContentIn.navigation.closeDrawer();
    }, [])

    return (
        <View onTouchEnd={handleRouteData} key={Math.floor(Math.random() * 9999999).toString()} style={{width: '100%', paddingHorizontal: 10, flexDirection: 'row', alignItems: 'center',  paddingVertical: 8, borderRadius: 5}}>
            {
                props.image != undefined ?
                <View style={{width: 30, height: 30, borderRadius: 50, overflow: 'hidden'}}>
                    <FastImageRes uri={props.image} />
                </View>:
                props.data.type == 'voice' ?
                <SpeakerIcon width={20} height={20} />:
                <HashSignIcon width={20} height={20} />
            }
            <TText style={{fontSize: 15, marginLeft: 10}}>{props.data.title}</TText>
        </View>
    )
})

export const CustomBottomSheet = React.memo(React.forwardRef((props: any, ref: any) => {
    const colorMode = useAppColor();

    return (
        <BottomSheet 
            {...props}
            style={{backgroundColor: 'transparent'}}
            dragHandleStyle={{backgroundColor: 'white', opacity: .9, width: 50, top: 10}}
            ref={ref}>
                <View style={{width: '100%', height: '100%', backgroundColor: colorMode.inverseWhiteGray, borderTopRightRadius: 10, borderTopLeftRadius: 10, paddingHorizontal: 10}}>
                    <FlashList
                        data={[{}]}
                        renderItem={() => 
                            <>
                                {props.children}
                            </>
                        }
                        estimatedItemSize={1}
                    />
                </View>
        </BottomSheet>
    )
}))