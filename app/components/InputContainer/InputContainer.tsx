import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/app/common'

type InputContainerProps = {
    keyBoard: string,
    answer: string,
}
const InputContainer: React.FC<InputContainerProps> = ({
    keyBoard,
    answer,
}) => {
    return (
        <View style={styles.box} >
            {answer.split('').map((letter, index) => (
                <Text style={styles.answer} key={index} >
                    {keyBoard.includes(letter) ? letter : ' - '}
                </Text>
            ))}
        </View>
    )
}

export default InputContainer

const styles = StyleSheet.create({
    box: {
        backgroundColor: colors.inputBox,
        padding: 20,
        borderRadius: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    answer: {
        fontSize: 18,
        fontWeight: '600',
        letterSpacing: 8,
    }
})