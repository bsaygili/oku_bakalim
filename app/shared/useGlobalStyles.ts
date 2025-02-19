import React from 'react'
import { Platform, StyleSheet } from 'react-native';
import colors from '../common/colors';

const useGlobalStyles = () => {

    const getStyles = (isDarkMode: boolean) =>
        StyleSheet.create({
            container: {
                flex: 1,
                paddingVertical: 20,
                paddingHorizontal:
                    Platform.OS === 'web' ? 20 : 10,
                backgroundColor: isDarkMode ? colors.backgroundColor : colors.light,
                gap: 20,
            },
            text: {
                fontSize: 18,
                color: isDarkMode ? colors.light : colors.backgroundColor,
            },
            input: {
                borderWidth: 1,
                borderColor: isDarkMode ? colors.light : colors.gray,
                color: isDarkMode ? colors.light : colors.backgroundColor,
                padding: 8,
                width: 60,
                textAlign: 'center'
            },
        });

    return {
        getStyles
    }
}

export default useGlobalStyles
