import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import colors from '@/app/common/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NotFoundScreen() {
    return (
        <SafeAreaView>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
            <View style={styles.container}>
                <Link href="/(tabs)" style={styles.button}>
                    Go back to Home screen!
                </Link>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: colors.headerTintColor,
    },
});
