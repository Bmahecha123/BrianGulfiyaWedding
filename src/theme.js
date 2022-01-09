const palette = {
    white: "#F8F9FA",
    azure: "#F2FDFF",
    black: "#212529",
    blue: "#355dae",
    red: "#7c2529",
    olive: "#ae4a35",
    bronze: "#ae4a35",
    brown: "#ae8635",
    green: "rgb(33, 37, 41)"
};

const fontStyles = {
    normal: "400",
    bold: "900"
};

const colors = {
    primaryTextColor: palette.black,
    green: palette.green,
    red: palette.red,
    buttonTextColor: palette.black,
    mainBackgroundColor: palette.white,
    buttonBackgroundColor: palette.white,
    inputBackgroundColor: palette.white,
    headerBackgroundColor: palette.white,
    footerBackgroundColor: palette.brown,
    cardBackgroundColor: palette.white,
    buttonBoxShadow: "0 2px 14px 4px rgb(33, 37, 41)",
    cardBoxShadow: "0 2px 14px 4px rgb(33, 37, 41)"
};

const spacing = {
    xsmall: ".5rem", //8px
    small: "1rem", //16px
    medium: "2rem", //32px
    large: "4rem", //64px
    xlarge: "6rem", //94px
    xxlarge: "8rem",
    xxxlarge: "10rem"
};

const fontSizing = {
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xlarge: "4rem"
};

const containerSizing = {
    small: "15rem",
    medium: "25rem",
    large: "50rem"
};

const cardStyles = (maxWidth) => {
    return {
        maxWidth: maxWidth,
        //boxShadow: colors.cardBoxShadow,
        margin: 0,
        borderRadius: 7,
        backgroundColor: colors.cardBackgroundColor,
        objectFit: 'cover'
    };
};

const cardTitleStyles = (fontSize) => {
    return {
        fontSize: fontSize,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        paddingTop: spacing.small,
        margin: 0,
        fontWeight: fontStyles.bold,
        alignSelf: 'center',
    };
};

export { colors, spacing, fontSizing, fontStyles, containerSizing, cardStyles, cardTitleStyles };