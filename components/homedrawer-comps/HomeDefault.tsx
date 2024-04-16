import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { TText } from "../../themed/themeComponents";
// @ts-ignore
import HashSignIcon from '../../assets/channelText.svg';
// @ts-ignore
import SearchLogo from '../../assets/discoverySearch.svg'
// @ts-ignore
import UsersLogo from '../../assets/users.svg'
// @ts-ignore
import BarsLogo from '../../assets/bars.svg'
import useAppColor from "../../themed/useAppColor";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import ChatBox from "./ChatBox";
import WelcomeMessage from "./WelcomeMessage";
import { FlashList } from "@shopify/flash-list";
import MessageBox from "./MessageBox";
import { setOpenRightDrawer } from "../../shared/rdx-slice";

const HomeDefault = React.memo((props: any) => {
    const colorMode = useAppColor();
    const dispatch = useAppDispatch();
    const channelData = useAppSelector(state => state.main.channelData);
    const serverData = useAppSelector(state => state.main.serverData);
    const messages = useAppSelector(state => state.main.messages);

    return (
        <View style={[styles.mainStyle, {backgroundColor: colorMode.inverseWhiteLightGray, flex: 1}]}>
            <HomeDefaultHeader navigation={props.navigation} channelTitle={channelData?.title} />

            <View style={{flex: 1,}}>
                <FlatList 
                    data={[{}]}
                    contentContainerStyle={{height: '100%', flexDirection: 'column-reverse'}}
                    renderItem={() => 
                        <>
                            <WelcomeMessage uri={channelData.image} channelTitle={channelData.title} serverId={serverData.id} />
                            {
                                messages.filter(message => message.channelId == channelData.id && message.serverId == serverData.id).map(message => 
                                    <MessageBox data={message}/>
                                )
                            }
                        </>
                    }
                />
            </View>

            <ChatBox channelTitle={channelData?.title} channelId={channelData.id} serverId={serverData.id} />
        </View>
    )
});

const HomeDefaultHeader = React.memo(({navigation, channelTitle}: {navigation: any; channelTitle: string}) => {
    const colorMode = useAppColor()
    const dispatch = useAppDispatch()
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: .5, borderBottomColor: 'lightgray', backgroundColor: colorMode.inverseWhiteLightGray}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginLeft: 14, marginRight: 8}} onTouchEnd={() => navigation.openDrawer()}>
                    <BarsLogo width={20} height={20} />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 14}}>
                    <HashSignIcon width={18} height={18} />
                    <TText fontFamily='bold' style={{color: colorMode.inverseBlack, marginLeft: 10, fontSize: 16}}>
                        {channelTitle}
                    </TText>
                </View>
            </View>

            <View style={{flexDirection: 'row', paddingRight: 20}}>
                <SearchLogo width={22} height={22} style={{marginRight: 20}} />
                <View onTouchEnd={() => dispatch(setOpenRightDrawer(true))}>
                    <UsersLogo width={22} height={22} />
                </View>
            </View>

        </View>
    )
});

const styles = StyleSheet.create({
    mainStyle: {

    }
})

export default HomeDefault;