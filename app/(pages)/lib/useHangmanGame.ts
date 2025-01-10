import { useCallback, useMemo, useState } from "react";
import oppositeWords from '@/assets/mock/oppositeWords.json';
import { gameStatus, MAX_WRONG_GUESSES } from "./constants";

export const useHangmanGame = () => {
    const [random, setRandom] = useState<number>(Math.ceil(Math.random() * oppositeWords.length));
    const [correctLetters, setCorrectLetters] = useState<string>('');
    const [wrongLetters, setWrongLetters] = useState<string>('');
    const [status, setStatus] = useState<string>('');

    const randomAns = useMemo(() => oppositeWords[random].answer.toUpperCase(), [random]);

    const winCheck = useCallback((letters: string) => {
        const isWin = randomAns.split('').every((char: string) => letters.includes(char));
        setStatus(isWin ? gameStatus.win : '');
    }, [randomAns]);

    const storeCorrectLetters = useCallback((letter: string) => {
        if (randomAns.includes(letter)) {
            const updatedLetters = correctLetters + letter;
            setCorrectLetters(updatedLetters);
            winCheck(updatedLetters);
        } else {
            const updatedLetters = wrongLetters + letter;
            setWrongLetters(updatedLetters);
            if (updatedLetters.length >= MAX_WRONG_GUESSES) {
                setStatus(gameStatus.lose);
            }
        }
    }, [randomAns, correctLetters, wrongLetters, winCheck]);

    const handleNextWord = useCallback(() => {
        setStatus('');
        setRandom(Math.ceil(Math.random() * oppositeWords.length));
        setCorrectLetters('');
        setWrongLetters('');
    }, []);

    return {
        randomAns,
        correctLetters,
        wrongLetters,
        status,
        storeCorrectLetters,
        handleNextWord, random
    };
};