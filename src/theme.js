import { createTheme } from '@mui/material/styles';

const colors = {
    primary: '#1B4B66',
    primaryTint: '#639599',
    error: '#B00020',
    highlight: '#FF8C4B',
    accent: '#F4F4F4',
    dark: '#13101E',
    bright: '#FFFFFF',
    grey: '#F1F1F1',
    lightText: '#B6B6B6',
    typeHighEmphasis: '#171520',
    typeLowEmphasis: '#626262',
};

const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary,
        },
        primaryTint: {
            main: colors.primaryTint,
        },
        error: {
            main: colors.error,
        },
        highlight: {
            main: colors.highlight,
        },
        accent: {
            main: colors.accent,
        },
        dark: {
            main: colors.dark,
        },
        bright: {
            main: colors.bright,
        },
        grey: {
            main: colors.grey,
        },
        lightText: {
            main: colors.lightText,
        },
        typeHighEmphasis: {
            main: colors.typeHighEmphasis,
        },
        typeLowEmphasis: {
            main: colors.typeLowEmphasis,
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
    },
});

export default theme;
