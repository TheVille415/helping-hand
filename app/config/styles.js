import { Platform } from 'react-native';

import colors from './colors';

export default {
    colors: colors,
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.dark
    },
    circle: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: colors.primary,
    }

}