
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, } from 'react-native';
import turkishWords from '../../assets/mock/turkishWords.json';
import { Badge, ChalkBoard, CustomModal } from '../components';
import colors from '../common/colors';
import { MINWORDLENGTH } from '../common/constants';
import { useSettings } from '../context/SettingsContext';



export default function HomeScreen() {
    const { isDarkMode, wordLimit } = useSettings();


    const [isModalOpen, setIsModalOpen] = useState<{ [key: string]: boolean }>({
        correctVisible: false,
        chooseWordVisible: false,
        wordLimitVisible: false,
    });

    const [selectedLetters, setSelectedLetters] = useState<string>('');
    const [words, setWords] = useState<string[]>([]);
    const [correctWordCounter, setCorrectWordCounter] = useState<number>(0);

    const generateWordsOffline = () => {
        const inputLetters = selectedLetters.split('').map((char) => char.trim());
        if (!inputLetters.length) {
            setIsModalOpen(
                prevState => ({
                    ...prevState,
                    chooseWordVisible: true,
                })
            )
        } else {
            setWords(turkishWords.filter((word) => {
                return (
                    word.length >= MINWORDLENGTH &&
                    word.split('').every((char) => inputLetters.includes(char.toUpperCase()))
                );
            }).sort(() => 0.5 - Math.random()).slice(0, 5));
        }


    };

    const handleSwipeRight = (item: string) => {
        if (correctWordCounter >= wordLimit) {
            setIsModalOpen(
                prevState => ({
                    ...prevState,
                    wordLimitVisible: true,
                }));
        } else if (words.length === 1) {
            generateWordsOffline();
        } else {
            setIsModalOpen(
                prevState => ({
                    ...prevState,
                    correctVisible: true,
                }));
            setWords((prevWords) => prevWords.filter((word) => word !== item));
            setCorrectWordCounter(pr => pr + 1);
        }
    };


    const onClear = () => {
        setSelectedLetters('');
        setWords([]);
        setCorrectWordCounter(0);
    }




    return (
        <SafeAreaView>
            <CustomModal
                type='warning'
                title='Harf Seçilmedi'
                message='Lütfen en az 3 harf seçiniz :)'
                visible={isModalOpen.chooseWordVisible}
                hideCustomAlert={() => setIsModalOpen(
                    prevState => ({
                        ...prevState,
                        chooseWordVisible: false,
                    })
                )}
            />
            <CustomModal
                visible={isModalOpen.correctVisible}
                hideCustomAlert={() => setIsModalOpen(
                    prevState => ({
                        ...prevState,
                        correctVisible: false,
                    })
                )}
            />
            <CustomModal
                type='info'
                title='Eğlence Bitti'
                message='Biraz mola :)'
                visible={isModalOpen.wordLimitVisible}
                hideCustomAlert={() => setIsModalOpen(
                    prevState => ({
                        ...prevState,
                        wordLimitVisible: false,
                    })
                )}

            />
            <FlatList
                data={[{ key: 'chalkboard' }]}
                keyExtractor={(item) => item.key}
                renderItem={() => (
                    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
                        <ChalkBoard
                            setSelectedLetters={setSelectedLetters}
                            selectedLetters={selectedLetters}
                            generateWords={generateWordsOffline}
                            onClear={onClear}
                        />

                        <View style={styles.informationContainer}>
                            <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>Kelimeler</Text>
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
    container: { flex: 1, backgroundColor: colors.backgroundColor },
    darkContainer: { backgroundColor: '#222' },
    informationContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 20 },
    wordsSection: { marginTop: 20, marginBottom: 30 },
    sectionTitle: { fontSize: 24, fontWeight: 'bold', color: colors.light, marginBottom: 10, textAlign: 'center' },
    darkText: { color: '#fff' },
    emptyMessage: { fontSize: 18, color: colors.light, textAlign: 'center', marginTop: 20 },
    wordCard: { borderWidth: 1, borderColor: colors.darkOverlayColor, backgroundColor: colors.shapeColor, borderRadius: 10, paddingVertical: 10, paddingHorizontal: 15, margin: 5 },
    darkWordCard: { backgroundColor: '#333', borderColor: '#555' },
    word: { fontSize: 28, color: colors.gray, fontWeight: 'bold', textAlign: 'center' },
});

