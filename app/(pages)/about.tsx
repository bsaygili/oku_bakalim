import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { colors } from '@/app/common/colors';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Geliştici: Bahadır Saygılı
            </Text>
            <Text style={styles.text}>
                Sürüm: 1.0.0
            </Text>
            <Text style={styles.text}>
                bhdrsaygili@gmail.com
            </Text>
            <Text style={styles.text}>
                bahadirsaygili.com
            </Text>
            <Link href={"/(pages)/hangman"} android_hyphenationFrequency="full" style={styles.text}>
                https://medium.com/@bhdrsaygili
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: colors.headerTintColor,
        fontSize: 20,
    },
});
