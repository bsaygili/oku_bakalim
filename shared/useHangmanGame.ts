import { useCallback, useMemo, useState, useEffect } from "react";
import oppositeWords from '@/assets/mock/oppositeWords.json';
import { gameStatus, MAX_WRONG_GUESSES } from "@/common/constants";

export interface WordInfo {
    id: number;
    question: string;
    answer: string;
    hint: string;
}

const useHangmanGame = () => {
    const [random, setRandom] = useState(() => Math.floor(Math.random() * oppositeWords.length));
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [wrongLetters, setWrongLetters] = useState<string[]>([]);
    const [status, setStatus] = useState<"win" | "lose" | "completed" | null>(null);

    const randomAns = useMemo(() => oppositeWords[random]?.answer ?? '', [random]);
    const uniqueAnswerLetters = useMemo(() => new Set(randomAns), [randomAns]);

    useEffect(() => {
        if (uniqueAnswerLetters.size === 0) return;
        const guessedLetters = new Set(correctLetters);
        const isWin = [...uniqueAnswerLetters].every(letter => guessedLetters.has(letter));
        if (isWin) setStatus(gameStatus.win as "win");
    }, [correctLetters, uniqueAnswerLetters]);

    const storeCorrectLetters = useCallback((letter: string) => {
        if (status) return;

        if (randomAns.includes(letter)) {
            setCorrectLetters(prev => {
                if (prev.includes(letter)) return prev;
                return [...prev, letter];
            });
        } else {
            setWrongLetters(prev => {
                if (prev.includes(letter)) return prev;
                const updated = [...prev, letter];
                if (updated.length >= MAX_WRONG_GUESSES) {
                    setStatus(gameStatus.lose as "lose");
                }
                return updated;
            });
        }
    }, [randomAns, status]);

    const handleNextWord = useCallback(() => {
        setRandom(Math.floor(Math.random() * oppositeWords.length));
        setCorrectLetters([]);
        setWrongLetters([]);
        setStatus(null);
    }, []);

    const handleLetterInput = useCallback((letter: string | undefined) => {
        if (
            typeof letter === 'string' &&
            !correctLetters.includes(letter) &&
            !wrongLetters.includes(letter) &&
            !status
        ) {
            storeCorrectLetters(letter);
        }
    }, [correctLetters, wrongLetters, storeCorrectLetters, status]);

    return {
        randomAns,
        correctLetters,
        wrongLetters,
        status,
        storeCorrectLetters,
        handleNextWord,
        wordInfo: oppositeWords[random],
        handleLetterInput,
    };
};

export default useHangmanGame;
