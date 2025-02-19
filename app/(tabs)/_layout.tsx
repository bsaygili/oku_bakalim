import React from 'react';
import { Tabs } from 'expo-router';
import * as VectorIcons from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import colors from '../common/colors';
import { useSettings } from '../context/SettingsContext';



export default function TabLayout() {
    const { isDarkMode } = useSettings();
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: isDarkMode ? colors.tabBarActiveTintColor : colors.shapeColor,
                tabBarStyle: {
                    backgroundColor: isDarkMode ? colors.backgroundColor : colors.light,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Kelimelik',
                    tabBarIcon: ({ color, focused }) => (
                        <VectorIcons.Feather name={focused ? "book-open" : "book"} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="hangman"
                options={{
                    title: 'Kelimeyi Tahmin Et',
                    headerShown: true,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="sign-hanging" size={24} color={color} />
                    ),
                }}
            /> <Tabs.Screen
                name="settings"
                options={{
                    title: 'Ayarlar',
                    headerShown: true,
                    tabBarIcon: ({ color, focused }) => (
                        <VectorIcons.Ionicons name={focused ? 'settings' : 'settings-outline'} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>
    );
}