import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking'
import * as VectorIcons from '@expo/vector-icons';
import appconfig from '../../app.config'
import { Link } from 'expo-router';
import colors from '../../common/colors';
import { useSettings } from '../../context/SettingsContext';
import useGlobalStyles from '../../shared/useGlobalStyles';

export default function AboutMe() {
    const { isDarkMode } = useSettings();
    const { getStyles } = useGlobalStyles();
    const globalStyles = getStyles(isDarkMode);
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>
                Geliştici: Bahadır Saygılı
            </Text>
            <Text style={globalStyles.text}>
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
    contactContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    }
});
