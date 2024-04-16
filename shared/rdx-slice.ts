import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainSlice, TAppColorMode, TChannel, TMessage, TServerData } from './types'

// Define a type for the slice state


// Define the initial state using that type
const initialState: IMainSlice = {
  safeAreaBg: '',
  hideBottomTab: false,
  serverData: {} as TServerData,
  channelData: {} as TChannel,
  messages: [],
  userProfile: {
    name: "Paulos",
    user_name: "paulos_ab",
    id: 1,
    image: 'https://unsplash.it/400/400?image=1'
  },
  openRightdrawer: false,
  appColorMode: 'light'
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateSafeAreaBg: (state, action: PayloadAction<string>) => {
      state.safeAreaBg = action.payload
    },
    setHideBottomTab: (state, action: PayloadAction<boolean>) => {
      state.hideBottomTab = action.payload
    },
    setServerData: (state, action: PayloadAction<TServerData>) => {
      state.serverData = action.payload
    },
    setChannelData: (state, action: PayloadAction<TChannel>) => {
      state.channelData = action.payload
    },
    updateMessage: (state, action: PayloadAction<TMessage>) => {
      state.messages.push(action.payload)
    },
    setOpenRightDrawer:  (state, action: PayloadAction<boolean>) => {
      state.openRightdrawer = action.payload
    },
    setAppColorMode:  (state, action: PayloadAction<TAppColorMode>) => {
      state.appColorMode = action.payload
    },
  },
})

export const { 
  updateSafeAreaBg, 
  setHideBottomTab,
  setServerData,
  setChannelData,
  updateMessage,
  setOpenRightDrawer,
  setAppColorMode
} = mainSlice.actions

export default mainSlice.reducer