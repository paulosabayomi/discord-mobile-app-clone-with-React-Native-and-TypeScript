import React from "react";
import { View } from "react-native";
import { TText } from "../../themed/themeComponents";
import { useIsFocused } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../shared/rdx-hooks";
import { updateSafeAreaBg } from "../../shared/rdx-slice";
import useAppColor from "../../themed/useAppColor";
import { FastImageRes } from "../../shared/Reusables";
// @ts-ignore
import HashWithBg from '../../assets/badgeOriginallyKnownAs.svg'
// @ts-ignore
import NitroIcon from '../../assets/userLimitedToNitro.svg'
// @ts-ignore
import AngleRightIcon from '../../assets/angle-right.svg';
// @ts-ignore
import IconUser from '../../assets/iconUser.svg';
// @ts-ignore
import PenIcon from '../../assets/guildEditServerProfile.svg';
// @ts-ignore
import ChatGiftIcon from '../../assets/chatGiftNitro.svg';
// @ts-ignore
import AppearanceIcon from '../../assets/appearance.svg';
// @ts-ignore
import InforIcon from '../../assets/guildInfo.svg';
import { FlashList } from "@shopify/flash-list";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ProfileIndexPage = React.memo((props: any) => {
    const isFocused = useIsFocused();
    const dispatch = useAppDispatch()
    const colorMode = useAppColor()
    const user_profile = useAppSelector(state => state.main.userProfile)

    React.useEffect(() => {
        if (isFocused) {
            dispatch(updateSafeAreaBg(colorMode.inverseWhiteLightGray))
        }
    }, [isFocused]);

    return (
        <View style={{flex: 1, backgroundColor: colorMode.inverseWhiteLightGray}}>
            <FlashList
                data={[{}]}
                renderItem={({ item }) => 
                <>
                    <View style={{height: 230, width: '100%', backgroundColor: colorMode.balanced_blue}} />
                    <View style={{flexDirection: 'row',paddingHorizontal: 20,  alignItems: 'flex-end', justifyContent: 'space-between', paddingTop: 60, marginBottom: 20}}>
                        <View style={{position: 'relative', alignItems: 'center'}}>
                            <View style={{padding: 10, backgroundColor:colorMode.inverseWhiteGray, width: 120, height: 120, borderRadius: 70, position: 'absolute', top: -120, left: 0}}>
                                <View style={{width: 100, height: 100, borderRadius: 70, overflow: 'hidden',}}>
                                    <FastImageRes uri="https://unsplash.it/400/400?image=1" />
                                </View>
                            </View>
                            <View>
                                <TText style={{fontSize: 30, color: colorMode.inverseBlack}} fontFamily="bold">{user_profile.name}</TText>
                                <TText>{user_profile.user_name}</TText>
                            </View>
                        </View>

                        <HashWithBg width={20} height={20} />
                    </View>

                    <View style={{marginBottom: 20}}>
                        <ListComp title="Set Status" icon={<IconUser width={25} height={25}  />} />
                    </View>
                    <ListComp title="Get Nitro" icon={<NitroIcon width={25} height={25}  />} />
                    <ListComp title="Account" icon={<IconUser width={25} height={25}  />} />
                    <ListComp title="Profiles" icon={<PenIcon width={25} height={25}  />} />

                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                        <TText style={{color: colorMode.inverseBlack}}>BILLING SETTINGS</TText>
                    </View>
                    <ListComp title="Nitro Gifting" icon={<ChatGiftIcon width={25} height={25}  />} />

                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                        <TText style={{color: colorMode.inverseBlack}}>APP SETTINGS</TText>
                    </View>
                    <ListComp callbackFn={() => props.navigation.navigate('Appearance')} title="Appearance" icon={<AppearanceIcon width={25} height={25}  />} />


                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                        <TText style={{color: colorMode.inverseBlack, textTransform: 'uppercase'}}>Support</TText>
                    </View>
                    <ListComp title="Support" icon={<InforIcon width={25} height={25}  />} />
                    <ListComp title="Upload debug logs to Discord Support" icon={<InforIcon width={25} height={25}  />} />
                    <ListComp title="Acknowledgements" icon={<InforIcon width={25} height={25}  />} />
                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                        <TText style={{color: colorMode.inverseBlack, textTransform: 'uppercase'}}>What's new</TText>
                    </View>
                    <ListComp title="What's New" icon={<InforIcon width={25} height={25}  />} />

                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                    </View>
                    <View style={{backgroundColor: colorMode.inverseWhiteGray, height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <TText style={{color: 'red'}}>Logout</TText>
                    </View>

                    <View style={{backgroundColor: colorMode.appLightGray, height: 70, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
                    </View>
                </>
            }
                estimatedItemSize={1}
            />
        </View>
    )
})

const ListComp = React.memo(({title, icon, callbackFn}: {title: string, icon: any, callbackFn?: Function}) => {
    const colorMode = useAppColor()
    return (
        <View onTouchEnd={() => callbackFn?.()} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, borderBottomColor: 'lightgray', borderBottomWidth: .4, paddingVertical: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {icon}
                <TText fontFamily="medium" style={{fontSize: 18, marginLeft: 20, color: colorMode.inverseBlack}}>
                    {title}
                </TText>
            </View>

            <View>
                <AngleRightIcon width={30} height={30} />
            </View>
        </View>
    )
})

export default ProfileIndexPage;