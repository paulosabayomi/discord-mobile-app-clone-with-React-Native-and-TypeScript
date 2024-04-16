import React from 'react'
import { View } from 'react-native'
import { TText } from '../../themed/themeComponents'
import { useIsFocused } from '@react-navigation/native';
import { useAppDispatch } from '../../shared/rdx-hooks';
import { updateSafeAreaBg } from '../../shared/rdx-slice';
import { FastImageRes } from '../../shared/Reusables';
import useAppColor from '../../themed/useAppColor';

const FriendsScreen = React.memo((props: any) => {
    const isFocused = useIsFocused();
    const dispatch = useAppDispatch()
    const colorMode = useAppColor()

    React.useEffect(() => {
        if (isFocused) {
            dispatch(updateSafeAreaBg(colorMode.inverseWhiteLightGray))
        }
    }, [isFocused]);

    return (
        <View style={{flex: 1, backgroundColor: colorMode.inverseWhiteLightGray, paddingTop: 10}}>
            <TText style={{paddingHorizontal: 15, marginBottom: 20}} fontFamily="bold">ONLINE - 1</TText>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginBottom: 15}}>
                <View style={{backgroundColor: colorMode.appLightGray, width: 35, height: 35, overflow: 'hidden', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <FastImageRes uri="https://unsplash.it/400/400?image=1" />
                </View>
                <View>
                    <TText fontFamily="semiBold" style={{color: colorMode.inverseBlack, fontSize: 18, marginLeft: 15}}>
                        testUserName
                    </TText>
                    <TText style={{color: colorMode.inverseBlack, marginLeft: 15}}>
                        Hi this is a test message
                    </TText>

                </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15}}>
                <View style={{backgroundColor: colorMode.appLightGray, width: 35, height: 35, overflow: 'hidden', borderRadius: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <FastImageRes uri="https://unsplash.it/400/400?image=1" />
                </View>
                <View>
                    <TText fontFamily="semiBold" style={{color: colorMode.inverseBlack, fontSize: 18, marginLeft: 15}}>
                        testUserName22
                    </TText>
                    <TText style={{color: colorMode.inverseBlack, marginLeft: 15}}>
                        Hi this is a test message
                    </TText>

                </View>
            </View>
        </View>
    )
})

export default FriendsScreen;