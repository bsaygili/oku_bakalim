import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from 'react-native';

const SettingsContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => { },
    wordLimit: 15,
    updateWordLimit: (limit: number) => { }
});


export const SettingsProvider = ({ children }: { children: ReactNode }) => {
    const systemTheme = Appearance.getColorScheme(); // Get system theme (dark/light)
    const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');
    const [wordLimit, setWordLimit] = useState(15);

    useEffect(() => {
        (async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('darkMode');
                const storedLimit = await AsyncStorage.getItem('wordLimit');

                if (storedTheme !== null) setIsDarkMode(JSON.parse(storedTheme));
                if (storedLimit) setWordLimit(Number(storedLimit));
            } catch (error) {
                console.error("Error loading settings:", error);
            }
        })();
    }, []);

    const toggleDarkMode = async () => {
        try {
            setIsDarkMode(prev => {
                AsyncStorage.setItem('darkMode', JSON.stringify(!prev));
                return !prev;
            });
        } catch (error) {
            console.error("Error saving dark mode setting:", error);
        }
    };

    const updateWordLimit = async (limit: number) => {
        try {
            setWordLimit(limit);
            await AsyncStorage.setItem('wordLimit', String(limit));
        } catch (error) {
            console.error("Error saving word limit:", error);
        }
    };

    return (
        <SettingsContext.Provider value={{ isDarkMode, toggleDarkMode, wordLimit, updateWordLimit }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettings = () => useContext(SettingsContext);
