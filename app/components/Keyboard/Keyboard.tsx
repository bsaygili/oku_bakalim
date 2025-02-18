import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '@/app/common/colors'
import letters from '@/app/common/letters'


const ABCBoard = ({ letter, onPress, correctLetters, wrongLetters }: { letter: string, onPress: (letter: string) => void, correctLetters: string[], wrongLetters: string[] }) => {
    const disabled = correctLetters.includes(letter) || wrongLetters.includes(letter)
    return (
        <TouchableOpacity onPress={() => onPress(letter)} style={[styles.abcContainer, correctLetters.includes(letter) && styles.disabledCorrect, wrongLetters.includes(letter) && styles.disabledWrong]} disabled={disabled}>
            <Text style={styles.abc}>{letter}</Text>
        </TouchableOpacity>
    )
}

type KeyboardProps = {
    onPress: (letter?: string) => void,
    correctLetters: string[],
    wrongLetters: string[],
}
const Keyboard: React.FC<KeyboardProps> = ({ onPress, correctLetters, wrongLetters }) => {
    return (
        <View style={styles.container}>
            {
                letters.map((letter, index) => (
                    <ABCBoard key={index + letter} onPress={onPress} letter={letter} wrongLetters={wrongLetters} correctLetters={correctLetters} />
                ))
            }
        </View>
    )
}

export default Keyboard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 25,
        flexWrap: 'wrap',
    },
    disabledCorrect: {
        backgroundColor: colors.success,
        color: colors.light,
    },
    disabledWrong: {
        backgroundColor: colors.error,
        color: colors.light,
    },
    abcContainer: {
        width: 30,
        height: 30,
        backgroundColor: colors.key,
        borderRadius: 10,
        marginRight: 13,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    abc: {
        color: colors.light,
        fontSize: 18,
        fontWeight: '600',
    },
})