
import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import colors from '@/common/colors';

type Props = {
    visible: boolean;
    hideCustomAlert: () => void;
    title?: string;
    message?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
}

const CustomModal: React.FC<Props> = ({
    visible,
    hideCustomAlert,
    title,
    message,
    type
}) => {

    const getTitleColor = () => {
        switch (type) {
            case 'error':
                return colors.error;
            case 'warning':
                return colors.warning;
            case 'info':
                return colors.info;
            default:
                return colors.success;
        }
    }

    return (
        <Modal transparent={true} animationType="fade" visible={visible}>
            <View style={styles.modalBackground}>
                <View style={styles.modalContainer}>
                    <Text style={[styles.modalTitle, { color: getTitleColor() }]}>{title ?? "Aferin!"}</Text>
                    <Text style={styles.modalMessage}>{message ?? "Kelimeyi doğru bildiniz!"}</Text>

                    {/* Button to close the alert */}
                    <Button mode="contained" onPress={hideCustomAlert} style={[styles.modalButton, { backgroundColor: getTitleColor() }]}>
                        Tamam
                    </Button>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: colors.success,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    buttonText: {
        color: colors.headerTintColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkOverlayColor,
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.success,
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 18,
        color: colors.gray,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButton: {
        backgroundColor: colors.success,
        width: '100%',
    },
});
