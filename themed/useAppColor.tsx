import React from "react";
import { useColorScheme } from "react-native";
import colors from "./colors";
import { useAppSelector } from "../shared/rdx-hooks";

const useAppColor = () => {
    const colorModeState = useAppSelector(state => state.main.appColorMode);
    const mode = useColorScheme() || 'light';
    return colors[colorModeState];
};

export default useAppColor;