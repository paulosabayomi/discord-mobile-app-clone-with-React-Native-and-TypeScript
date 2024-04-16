import React from "react";
import { Text } from "react-native";
import { ITText, TFontFamily } from "../shared/types";
import useAppColor from "./useAppColor";

export const TText = React.memo((props: ITText) => {
    const colorMode = useAppColor();
    const fonts: {[key in TFontFamily]: string} = {
        bold: 'ggsans-Bold',
        semiBold: 'ggsans-SemiBold',
        medium: 'ggsans-Medium',
        regular: 'ggsans-Regular'
    }
    return (
        <Text {...props} style={[{fontFamily: fonts[props.fontFamily as TFontFamily]}, {color: colorMode.textGray}, props.style]}>
            {props.children}
        </Text>
    )
})