import React from 'react'
import { View } from 'react-native'
import { TText } from '../../themed/themeComponents';
import { Drawer } from 'react-native-drawer-layout';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeDefault from '../homedrawer-comps/HomeDefault';
import { useAppDispatch, useAppSelector } from '../../shared/rdx-hooks';
import { setHideBottomTab, setOpenRightDrawer, updateSafeAreaBg } from '../../shared/rdx-slice';
import useAppColor from '../../themed/useAppColor';
import LeftDrawerContent from '../homedrawer-comps/LeftDrawerContent';
// @ts-ignore
import HashSignIcon from '../../assets/channelText.svg';
// @ts-ignore
import SearchLogo from '../../assets/discoverySearch.svg'
// @ts-ignore
import UsersLogo from '../../assets/users.svg'
// @ts-ignore
import BarsLogo from '../../assets/bars.svg'
import RightDrawerContent from '../homedrawer-comps/RightDrawerContent';

const LeftDrawer = createDrawerNavigator();

const LeftDrawerScreen = React.memo(({navigation}: {navigation: any}) => {
  const dispatch = useAppDispatch();
  const colorMode = useAppColor();

  return (
    <LeftDrawer.Navigator 
        screenOptions={{ 
            drawerPosition: 'left',
            drawerStyle: {
                width: '85%'
            }
        }}
        screenListeners={{
          state: (e) => {
            console.log("e current", e.data.state.history);
            
            if (e.data.state.history.length > 1) {
              dispatch(updateSafeAreaBg(colorMode.appLightGray));
              dispatch(setHideBottomTab(false))
            }else{
              dispatch(setHideBottomTab(true))
              dispatch(updateSafeAreaBg(colorMode.inverseWhiteLightGray))
            }
          }
        }}
        drawerContent={(props) => <LeftDrawerContent dProps={props} />}>

      <LeftDrawer.Screen 
        name="HomeDefault" 
        component={HomeDefault} 
        options={{
          headerTitleAlign: 'left',
          headerStyle: {
            backgroundColor: colorMode.inverseWhiteLightGray
          },
          headerShown: false,
          headerLeft(vals) {
            return <View style={{marginLeft: 14, marginRight: 8}} {...vals} onTouchEnd={() => navigation.openDrawer()}>
              <BarsLogo width={20} height={20} />
            </View>
          },
          headerTitle(props) {
              return <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <HashSignIcon width={18} height={18} />
                <TText fontFamily='bold' style={{color: colorMode.inverseBlack, marginLeft: 10, fontSize: 16}}>welcome-and-rules</TText>
              </View>
          },
          headerRight(props) {
              return <View style={{flexDirection: 'row', paddingRight: 20}}>
                <SearchLogo width={22} height={22} style={{marginRight: 20}} />
                <UsersLogo width={22} height={22} />
              </View>
          },
        }}
      />

    </LeftDrawer.Navigator>
  );
});

function RightDrawerScreen({navigation}: {navigation: any}) {
  const openRightDrawer = useAppSelector(state => state.main.openRightdrawer);
  const dispatch = useAppDispatch()
  const colorMode = useAppColor();

  return (
    <Drawer
      open={openRightDrawer}
      drawerStyle= {{
        width: '85%',
        backgroundColor: colorMode.inverseWhiteLightGray,
      }}
      style={{
      }}
      onOpen={() => {
        dispatch(setOpenRightDrawer(true));
        dispatch(updateSafeAreaBg(colorMode.appLightGray));

      }}
      onClose={() => dispatch(setOpenRightDrawer(false))}
      drawerPosition="right"
      renderDrawerContent={() => <RightDrawerContent />}
    >
      <LeftDrawerScreen navigation={navigation} />
    </Drawer>
  );
}

const HomeScreen = React.memo((props: any) => {
    return (
        <View style={{flex: 1}}>
                <RightDrawerScreen navigation={props.navigation} />
        </View>
    )
})

export default HomeScreen;