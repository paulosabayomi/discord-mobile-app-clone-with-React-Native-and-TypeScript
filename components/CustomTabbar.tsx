import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import { useAppSelector } from '../shared/rdx-hooks';
import useAppColor from '../themed/useAppColor';

const CustomTabBar = React.memo(({ state, descriptors, navigation }: { state: any, descriptors: any, navigation: any }) => {
    const searchTabBottomSheetRef = React.useRef<any>()
    const shouldHideBottomTab = useAppSelector(state => state.main.hideBottomTab);
    const colorMode = useAppColor()

  return (
    <View style={{ flexDirection: 'row', height: shouldHideBottomTab ? 0 : 80, backgroundColor: colorMode.appGray }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
            console.log("route", options);
            

        const isFocused = state.index === index;

        const onPress = () => {
            if (route.name.toLowerCase() === 'search') {
                searchTabBottomSheetRef.current?.open()
            }else{
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
            }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
            <>
                <TouchableOpacity
                    key={Math.floor(Math.random() * 99999999).toString()}
                    accessibilityRole="button"
                    accessibilityState={isFocused ? { selected: true } : {}}
                    accessibilityLabel={options.tabBarAccessibilityLabel}
                    testID={options.tabBarTestID}
                    onPress={onPress}
                    onLongPress={onLongPress}
                    style={{ flex: 1, height: 50, alignItems: 'center', justifyContent: 'center', opacity: isFocused ? 1 : .5 }}
                >
                    {options.tabBarIcon()}
                    {/* <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                    </Text> */}
                </TouchableOpacity>
                <SearchScreen ref={searchTabBottomSheetRef} />
            </>
        );
      })}
    </View>
  );
})


export default CustomTabBar;