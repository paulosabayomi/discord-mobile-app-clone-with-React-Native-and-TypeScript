import { TextProps } from "react-native";

export interface IMainSlice {
    safeAreaBg: string;
    hideBottomTab: boolean;
    serverData: TServerData;
    channelData: TChannel;
    messages: Array<TMessage>;
    userProfile: TUserDetails;
    openRightdrawer: boolean;
    appColorMode: TAppColorMode
}

export interface ITText extends TextProps {
    fontFamily?: TFontFamily;
}

export type TServerData = {
    id: number;
    image: string,
    title: string,
    channels: Array<TChannelSection>
};

export type TChannelSection = {
    id: number
    category: string,
    items: Array<TChannel>
};

export type TChannel = {id: number; title: string, type: TChannelType; image?: string}

export type TChannelType = 'voice' | 'text'

export type TFontFamily = 'bold' | 'semiBold' | 'medium' | 'regular'

export interface IChannelListContext {
    navigation: any
}

export type TMessage = {
    channelId: number;
    serverId: number;
    message: string;
    datetime: string;
    user_details: TUserDetails;
}

export type TUserDetails = {
    name: string;
    user_name: string;
    id: number;
    image: string;
}

export type TAppColorMode = 'light' | 'dark'