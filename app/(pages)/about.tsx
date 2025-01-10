import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../common';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Geliştici: Bahadır Saygılı
            </Text>
            <Text style={styles.text}>
                Sürüm: 1.0.0
            </Text>
            <Text style={styles.text}>
                bhdrsaygili@gmail.com
            </Text>
            <Text style={styles.text}>
                bahadirsaygili.com
            </Text>
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
});