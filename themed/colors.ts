const sharedColors = {
    textGray: 'gray',
    blurple: "#5865F2",
    highlightBlue: '#216ADD',
    dev_blue: '#3E70DD',
    light_blurple: '#949CF7',
    balanced_blue: '#45DDC0',
    dd_green: '#58F287',
    bug_hunter_green: '#3BA561',
    bug_hunter_green_light: '#B4E1CE'
}

export default {
    light: {
        appBgColor: 'white', // main
        appLightGray: '#e4e5e8', // main
        appGray: '#efeff1', // main
        separatorBorderColor: 'gray',
        inverseWhite: 'white',
        inverseBlack: 'black',
        inverseWhiteGray: 'white',
        inverseWhiteLightGray: 'white',
        ...sharedColors
    },
    dark: {
        appBgColor: 'black',
        appLightGray: '#2b2d31',
        appGray: '#1e1f22',
        inverseWhite: 'black',
        separatorBorderColor: 'gray',
        inverseBlack: 'white',
        inverseWhiteGray: '#2b2d31',
        inverseWhiteLightGray: 'rgb(70,70,70)',
        ...sharedColors
    }
}