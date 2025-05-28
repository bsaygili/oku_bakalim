import React from 'react';
import { StyleSheet, View } from 'react-native';
import { gameStatus } from '../common/constants';
import { CustomModal, InputContainer, Keyboard, StickMan, WordContainer } from '../components';
import useHangmanGame from '../shared/useHangmanGame';
import { useSettings } from '../context/SettingsContext';
import useGlobalStyles from '../shared/useGlobalStyles';

export default function HangmanScreen() {
    const { wordInfo, randomAns, correctLetters, wrongLetters, status, handleLetterInput, handleNextWord } = useHangmanGame();

    const { isDarkMode } = useSettings();
    const { getStyles } = useGlobalStyles();
    const globalStyles = getStyles(isDarkMode);

    const correctLettersArr = correctLetters ?? [];
    const wrongLettersArr = wrongLetters ?? [];

    return (
        <View style={globalStyles.container}>
            {status === gameStatus.win && (
                <CustomModal
                    visible
                    title="Aferin"
                    message="Tebrikler"
                    type="success"
                    hideCustomAlert={handleNextWord}
                />
            )}
            {status === gameStatus.lose && (
                <CustomModal
                    visible
                    title="Kaybettin"
                    message={`Cevap: ${randomAns}`}
                    type="error"
                    hideCustomAlert={handleNextWord}
                />
            )}
            <View style={styles.row}>
                <StickMan wrongWordCount={wrongLettersArr.length} />
                <WordContainer wordInfo={wordInfo} />
            </View>
            <InputContainer enteredLetters={correctLettersArr} answer={randomAns} />
            <Keyboard
                onPress={handleLetterInput}
                correctLetters={correctLettersArr}
                wrongLetters={wrongLettersArr}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
