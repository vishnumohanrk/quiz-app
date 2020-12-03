import { useState } from 'react';

import { IQuestion } from '../utils/types';

const animCalc = (correct: boolean) => (correct ? 'animate-scale-and-scale' : 'animate-wobble-hor-bottom');

const useQuiz = (data: IQuestion[]) => {
  const [quizQns, setQuizQns] = useState(data);
  const [index, setIndex] = useState(0);
  const [anim, setAnim] = useState<ReturnType<typeof animCalc> | ''>('');

  const currentQn = quizQns[index];

  const handleUserSelect = (userAnswer: string) => {
    setQuizQns(quizQns.map(i => (i.question === currentQn.question ? { ...i, userAnswer } : i)));
    setAnim(animCalc(userAnswer === currentQn.correctAnswer));
  };

  const moveQns = (id: 'pre' | 'next') => {
    const nextIndex = id === 'next' ? (index + 1 >= 10 ? 10 : index + 1) : index - 1 <= 0 ? 0 : index - 1;
    setIndex(nextIndex);
    setAnim('');
  };

  const moveNext = () => moveQns('next');
  const movePre = () => moveQns('pre');

  const { topTxt, totalCorrect } =
    index === 10
      ? { topTxt: 'Your Score', totalCorrect: quizQns.filter(i => i.userAnswer === i.correctAnswer).length }
      : { topTxt: currentQn.question, totalCorrect: 0 };

  return { moveNext, movePre, handleUserSelect, currentQn, index, totalCorrect, anim, topTxt };
};

export default useQuiz;
