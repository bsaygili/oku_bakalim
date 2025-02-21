import React from 'react';
import { StyleSheet, View } from 'react-native';
import oppositeWords from '../../assets/mock/oppositeWords.json';
import { gameStatus } from '../common/constants';
import { CustomModal, InputContainer, Keyboard, StickMan, WordContainer } from '../components';
import useHangmanGame from '../shared/useHangmanGame';
import { useSettings } from '../context/SettingsContext';
import useGlobalStyles from '../shared/useGlobalStyles';





export default function HangmanScreen() {
    const { random, randomAns, correctLetters, wrongLetters, status, storeCorrectLetters, handleNextWord } = useHangmanGame();

    const { isDarkMode } = useSettings();
    const { getStyles } = useGlobalStyles();
    const globalStyles = getStyles(isDarkMode);
    return (
        <View style={globalStyles.container}>
            <CustomModal
                visible={status === gameStatus.win || status === gameStatus.lose}
                title={status === gameStatus.win ? 'Aferin' : 'Kaybettin'}
                message={status === gameStatus.win ? 'Tebrikler' : 'Tekrar denemek ister misin?'}
                type={status === gameStatus.win ? 'success' : 'error'}
                hideCustomAlert={handleNextWord}
            />
            <View style={styles.row}>
                <StickMan wrongWordCount={wrongLetters?.length ?? 0} />
                <WordContainer wordInfo={oppositeWords[random]} />
            </View>
            <InputContainer keyBoard={correctLetters} answer={randomAns} />
            <Keyboard
                onPress={(letter) => storeCorrectLetters(letter as string)}
                correctLetters={correctLetters?.split("")}
                wrongLetters={wrongLetters?.split("")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10
    },
});
