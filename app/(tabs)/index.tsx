
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import turkishWords from '../../assets/mock/turkishWords.json';
import { Badge, ChalkBoard, CustomModal } from '../components';
import colors from '../common/colors';
import { MINWORDLENGTH } from '../common/constants';



export default function HomeScreen() {
    const [correctVisible, setCorrectVisible] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const [selectedLetters, setSelectedLetters] = useState<string>('');
    const [words, setWords] = useState<string[]>([]);
    const [correctWordCounter, setCorrectWordCounter] = useState<number>(0);

    const generateWordsOffline = () => {

        const inputLetters = selectedLetters.split('').map((char) => char.trim());
        if (!inputLetters.length) {
            setVisible(true);
        } else {
            setWords(turkishWords.filter((word) => {
                return (
                    word.length >= MINWORDLENGTH &&
                    word.split('').every((char) => inputLetters.includes(char.toUpperCase()))
                );
            }).sort(() => 0.5 - Math.random())
                .slice(0, 5))
        }


    };

    const handleSwipeRight = (item: string) => {
        setCorrectVisible(true);
        setWords((prevWords) => prevWords.filter((word) => word !== item));
        setCorrectWordCounter(pr => pr + 1);
        if (words.length === 1) {
            generateWordsOffline();
        }
    };


    const onClear = () => {
        setSelectedLetters('');
        setWords([]);
        setCorrectWordCounter(0);
    }

    return (
        <SafeAreaView>
            <CustomModal type="warning" visible={visible} hideCustomAlert={() => setVisible(pr => !pr)} title='Harf Seçilmedi' message='Lütfen en az 3 harf seçiniz :)' />
            <CustomModal visible={correctVisible} hideCustomAlert={() => setCorrectVisible(pr => !pr)} />
            <FlatList
                data={[{ key: 'chalkboard' }]}
                keyExtractor={(item) => item.key}
                renderItem={() => (
                    <View style={styles.container}>
                        <ChalkBoard
                            setSelectedLetters={setSelectedLetters}
                            selectedLetters={selectedLetters}
                            generateWords={generateWordsOffline}
                            onClear={onClear}
                        />

                        <View style={styles.informationContainer}>
                            <Text style={styles.sectionTitle}>Kelimeler</Text>
                            <Badge size={30} value={correctWordCounter} />
                        </View>
                        <View style={styles.wordsSection}>
                            {!words.length ? (
                                <Text style={styles.emptyMessage}>Henüz kelime üretmedik </Text>
                            ) : (
                                <FlatList
                                    data={words}
                                    keyExtractor={(_, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity key={item} style={styles.wordCard} onPress={() => handleSwipeRight(item)}>
                                            <Text style={styles.word}>{item}</Text>
                                        </TouchableOpacity>
                                    )}
                                />
                            )}
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backgroundColor,
    },
    informationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 20,
    },
    wordsSection: {
        marginTop: 20,
        marginBottom: 30,
    },
    sectionTitle: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.light,
        marginBottom: 10,
        textAlign: 'center',
    },
    emptyMessage: {
        fontSize: 18,
        color: colors.light,
        textAlign: 'center',
        marginTop: 20,
    },
    wordsList: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    wordCard: {
        borderWidth: 1,
        borderColor: colors.darkOverlayColor,
        backgroundColor: colors.shapeColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        margin: 5,
    },
    word: {
        fontSize: 28,
        color: colors.gray,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    generateButton: {
        backgroundColor: colors.success,
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    generateButtonText: {
        color: colors.headerTintColor,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

