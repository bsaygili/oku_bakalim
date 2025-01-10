import { colors } from '@/app/common';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type BadgeProps = {
    value: string | number; // The text or number displayed in the badge
    color?: string; // Background color for the badge
    textColor?: string; // Text color
    size?: number; // Size of the badge
};

const Badge: React.FC<BadgeProps> = ({
    value,
    color = colors.error, // Default color is red
    textColor = colors.lightGrey, // Default text color is white
    size = 24, // Default size is 24px
}) => {
    return (
        <View
            style={[
                styles.badge,
                {
                    backgroundColor: value === 0 ? color : colors.success,
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                },
            ]}
        >
            <Text style={[styles.text, { color: textColor, fontSize: size / 2.5 }]}>
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    badge: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    text: {
        fontWeight: 'bold',
    },
});

export default Badge;
