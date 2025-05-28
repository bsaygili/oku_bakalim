
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '@/common/colors'

type WordContainerProps = {
    wordInfo: {
        word: string
        answer: string
    }
}
const WordContainer: React.FC<WordContainerProps> = ({ wordInfo }) => {
    const [isHintOpen, setIsHintOpen] = React.useReducer(h => !h, false)
    return (
        <View style={styles.container}>
            <Text>Zıt Anlamlı:</Text>
            <Text style={styles.word}>{wordInfo?.word}</Text>
            <View style={styles.hintContainer}>
                <TouchableOpacity onPress={setIsHintOpen} >
                    <Text >İpucu</Text>
                </TouchableOpacity>
            </View>
            {isHintOpen &&
                <View>
                    <Text>Bu kelime, {wordInfo?.answer?.charAt(0)} ile başlar.</Text>
                </View>}
        </View>
    )
}

export default WordContainer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.wordBox,
        borderRadius: 10,
        padding: 10,
    },
    word: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        textTransform: 'capitalize',
    },
    hintContainer: {
        alignSelf: 'flex-end',
    },
})