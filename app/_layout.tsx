import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import registerNNPushToken from 'native-notify';


export default function RootLayout() {
  registerNNPushToken(26108, 'Czs9o1GdTrgMBlz63vCcHh');

  return (
    <>
      <StatusBar style="dark" />
      <Stack>
        <Stack.Screen name="(pages)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>

    </>
  );
}
