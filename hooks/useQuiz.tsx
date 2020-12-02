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
    const qn = quizQns[nextIndex];

    setIndex(nextIndex);

    if (qn && qn.userAnswer) setAnim(animCalc(qn.userAnswer === qn.correctAnswer));
    if ((qn && !qn.userAnswer) || !qn) setAnim('');
  };

  const totalCorrect = quizQns.filter(i => i.userAnswer === i.correctAnswer).length;

  return { moveQns, handleUserSelect, currentQn, index, totalCorrect, anim };
};

export default useQuiz;
