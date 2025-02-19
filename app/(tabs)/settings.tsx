import React from 'react';
import { StyleSheet, Text, View, Switch, TextInput, Button, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AboutMe } from '../components';
import { useSettings } from '../context/SettingsContext';
import useGlobalStyles from '../shared/useGlobalStyles';

export default function SettingsScreen() {
    const { isDarkMode, toggleDarkMode, wordLimit, updateWordLimit } = useSettings();
    const { getStyles } = useGlobalStyles();
    const globalStyles = getStyles(isDarkMode);
    return (
        <SafeAreaView style={globalStyles.container}>
            <View style={styles.settingRow}>
                <Text style={globalStyles.text}>Koyu Tema</Text>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>

            <View style={styles.settingRow}>
                <Text style={globalStyles.text}>Kelime Tekrar Sayısı</Text>
                <TextInput
                    style={globalStyles.input}
                    keyboardType="numeric"
                    value={String(wordLimit)}
                    onChangeText={(text) => updateWordLimit(Number(text))}
                />
                <Button title="Kaydet" onPress={() => Alert.alert('Ayar Kaydedildi', `Kelime tekrar sayısı: ${wordLimit}`)} />
            </View>
            <AboutMe />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
});