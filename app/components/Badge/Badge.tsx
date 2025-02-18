
import { colors } from '@/app/common/colors';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


type BadgeProps = {
    value: string | number;
    color?: string;
    textColor?: string;
    size?: number;
};

const Badge: React.FC<BadgeProps> = ({
    value,
    color = colors.error,
    textColor = colors.lightGrey,
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
