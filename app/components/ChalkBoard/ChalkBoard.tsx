import React from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { letters } from '@/app/common';

type ChalkBoardType = {
    selectedLetters: string;
    setSelectedLetters: React.Dispatch<React.SetStateAction<string>>;
    generateWords?: () => void;
    onClear?: () => void;
}



const ChalkBoard: React.FC<ChalkBoardType> = ({
    selectedLetters,
    setSelectedLetters,
    generateWords,
    onClear
}) => {

    const [loaded] = useFonts({
        'GloriaHallelujah': require('../../../assets/fonts/GloriaHallelujah-Regular.ttf'),
    });
    if (!loaded) {
        return null;
    }

    const handleLetterPress = (letter: string) => {
        if (selectedLetters.includes(letter)) {
            setSelectedLetters(selectedLetters.replace(letter, ''));
        } else { setSelectedLetters((prev) => prev + letter); }

    };

    const activeChar = (char: string) => selectedLetters.includes(char);


    return (
        <ImageBackground
            source={require('../../../assets/images/chalkboard.png')}
            style={styles.container}
        >
            <Text style={styles.selectedText}>Kelime Üretici</Text>

            <Text style={styles.selectedText}>{selectedLetters}</Text>

            <View style={styles.lettersContainer}>
                {letters.map((letter) => (
                    <TouchableOpacity
                        key={letter}
                        style={[
                            styles.letterBox,
                            activeChar(letter) && styles.activeLetterBox,
                        ]}
                        onPress={() => handleLetterPress(letter)}
                    >
                        <Text style={styles.letter}>{letter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.clearBtn}
                    onPress={() => onClear && onClear()}
                >
                    <Text style={styles.clearText}>Tahtayı Sil</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.clearBtn}
                    onPress={() => generateWords && generateWords()}
                >
                    <Text style={styles.clearText}>Oku bakalım </Text>
                </TouchableOpacity>
            </View>

        </ImageBackground >
    );
}

export default ChalkBoard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    selectedText: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'GloriaHallelujah',
        textAlign: 'center',
        marginBottom: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 2,
    },
    lettersContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 20,
    },
    letterBox: {
        width: 50,
        height: 50,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    activeLetterBox: {
        backgroundColor: 'green', // Background color for active letters
    },
    letter: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'GloriaHallelujah',
    },
    btnContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    clearBtn: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 10,
        borderRadius: 5,
    },
    clearText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'GloriaHallelujah',
    },
});