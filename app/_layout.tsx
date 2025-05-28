import 'expo-dev-client';

import React from 'react';
import { Stack } from 'expo-router';
import registerNNPushToken from 'native-notify';
import { SettingsProvider, useSettings } from '../context/SettingsContext';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import useGlobalStyles from '../shared/useGlobalStyles';
import colors from '@/common/colors';


export default function RootLayout() {
  registerNNPushToken(26108, 'Czs9o1GdTrgMBlz63vCcHh');
  const { isDarkMode } = useSettings();
  const { getStyles } = useGlobalStyles();

  const styles = getStyles(isDarkMode);

  return (
    <SettingsProvider>
      <StatusBar
        animated={true}
        backgroundColor={isDarkMode ? colors.info : colors.light}
        barStyle={'dark-content'}
        showHideTransition={'slide'}
      // hidden={!isDarkMode}
      />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </SettingsProvider >
  );
}

