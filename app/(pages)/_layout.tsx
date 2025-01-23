import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../common';



export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.tabBarActiveTintColor,
                tabBarStyle: {
                    backgroundColor: colors.backgroundColor,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Kelimelik',
                    tabBarIcon: ({ color, focused }) => (
                        <Feather name={focused ? "book-open" : "book"} size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="hangman"
                options={{
                    title: 'Kelimeyi Tahmin Et',
                    tabBarIcon: ({ color, focused }) => (
                        <FontAwesome6 name="sign-hanging" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: 'Hakkımızda',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'bonfire-sharp' : 'bonfire-outline'} color={color} size={24} />
                    ),
                }}
            />

        </Tabs>
    );
}