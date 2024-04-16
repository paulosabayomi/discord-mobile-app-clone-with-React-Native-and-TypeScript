import React from "react";
import { TextInput, View } from "react-native";
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { TText } from "../../themed/themeComponents";
import { CustomBottomSheet, FastImageRes } from "../../shared/Reusables";
import useAppColor from "../../themed/useAppColor";
// @ts-ignore
import SearchLogo from '../../assets/discoverySearch.svg'

const SearchScreen = React.memo(React.forwardRef((props: any, ref: any) => {
    const colorMode = useAppColor();

    return (
        <CustomBottomSheet height={'95%'} ref={ref}>
            <View style={{paddingTop: 20}}>
                <View style={{position: 'relative', justifyContent: 'center'}}>
                    <TextInput 
                        placeholder="Where would you like to go?"
                        placeholderTextColor={'gray'}
                        style={{height: 40, backgroundColor: colorMode.appLightGray, paddingHorizontal: 10, borderRadius: 6, color: 'gray', fontFamily: 'ggsans-Regular'}}
                    />
                    <SearchLogo style={{position: 'absolute', right: 10}} width={22} height={22} />
                </View>

                <View style={{marginTop: 10, flexDirection: 'row'}}>
                    <View style={{width: 50, height: 50, borderRadius: 50, overflow: 'hidden', marginRight: 10}}>
                        <FastImageRes uri="https://unsplash.it/400/400?image=1"/>
                    </View>
                    <View style={{width: 50, height: 50, borderRadius: 50, overflow: 'hidden', marginRight: 10}}>
                        <FastImageRes uri="https://unsplash.it/400/400?image=1"/>
                    </View>
                    <View style={{width: 50, height: 50, borderRadius: 50, overflow: 'hidden', marginRight: 10}}>
                        <FastImageRes uri="https://unsplash.it/400/400?image=1"/>
                    </View>
                </View>

            </View>
        </CustomBottomSheet>
    );
}))

export default SearchScreen;