import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking'
import * as VectorIcons from '@expo/vector-icons';
import colors from '../common/colors';
import appconfig from '../../app.config'
import { Link } from 'expo-router';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Geliştici: Bahadır Saygılı
            </Text>
            <Text style={styles.text}>
                Sürüm: {appconfig.expo.version}
            </Text>
            <View style={styles.contactContainer}>
                <Pressable
                    onPress={() => Linking.openURL('https://medium.com/@bhdrsaygili')}
                >
                    <VectorIcons.Ionicons
                        name="logo-medium"
                        size={30}
                        color={colors.info}
                    />
                </Pressable>
                <Pressable
                    onPress={() => Linking.openURL('https://www.linkedin.com/in/bahadir-saygili/')}
                >
                    <VectorIcons.Ionicons
                        name="logo-linkedin"
                        size={30}
                        color={colors.info}
                    />
                </Pressable>
                <Pressable
                    onPress={() => Linking.openURL('https://bahadirsaygili.com')}
                >
                    <VectorIcons.Ionicons
                        name="globe-outline"
                        size={30}
                        color={colors.info}
                    />
                </Pressable>
                <Pressable
                    onPress={() => Linking.openURL('https://github.com/bsaygili')}
                >
                    <VectorIcons.Ionicons
                        name="logo-github"
                        size={30}
                        color={colors.info}
                    />
                </Pressable>
                <Link href="mailto:bhdrsaygili@gmail.com">
                    <VectorIcons.Ionicons
                        name="mail-outline"
                        size={30}
                        color={colors.info}
                    />
                </Link>
            </View>
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
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 50,
        gap: 30
    }
});
