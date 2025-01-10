import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CustomModal, Header, InputContainer, Keyboard, StickMan, WordContainer } from '../components';
import oppositeWords from '@/assets/mock/oppositeWords.json';
import { gameStatus, useHangmanGame } from './lib';





const HangmanScreen: React.FC = () => {
    const { random, randomAns, correctLetters, wrongLetters, status, storeCorrectLetters, handleNextWord } = useHangmanGame();

    return (
        <View style={styles.container}>
            <CustomModal
                visible={status === gameStatus.win || status === gameStatus.lose}
                title={status === gameStatus.win ? 'Aferin' : 'Kaybettin'}
                message={status === gameStatus.win ? 'Tebrikler' : 'Tekrar denemek ister misin?'}
                type={status === gameStatus.win ? 'success' : 'error'}
                hideCustomAlert={handleNextWord}
            />
            <Header />
            <View style={styles.row}>
                <StickMan wrongWordCount={wrongLetters.length} />
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});

export default HangmanScreen;