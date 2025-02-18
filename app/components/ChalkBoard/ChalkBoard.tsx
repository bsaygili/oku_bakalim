import React from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { letters } from '@/app/common/letters';

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
            style={styles.imagebackground}

        >
            <View style={styles.container}>
                <Text style={styles.title}>Seçilen Harfler</Text>
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
            </View>
        </ImageBackground >
    );
}

export default ChalkBoard;

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    title: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 10, height: 10 },
        textShadowRadius: 5,
    },
    selectedText: {
        fontSize: 30,
        color: 'white',
        fontFamily: 'GloriaHallelujah',
        textAlign: 'center',
        marginBottom: 10,
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
        backgroundColor: 'green',
    },
    letter: {
        fontSize: 24,
        color: 'white',
        fontFamily: 'GloriaHallelujah',
    },
    btnContainer: {
        marginVertical: 30,
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