import { Platform } from 'react-native';

import theme from './theme';

export default {
    theme: theme,
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    }

}