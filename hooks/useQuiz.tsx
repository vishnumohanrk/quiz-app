import { useState } from 'react';

import { IQuestion } from '../utils/types';

const useQuiz = (data: IQuestion[]) => {
  const [quizQns, setQuizQns] = useState(data);
  const [index, setIndex] = useState(0);

  const moveNext = () => setIndex(index + 1 >= 10 ? 10 : index + 1);
  const movePre = () => setIndex(index - 1 <= 0 ? 0 : index - 1);

  const currentQn = quizQns[index];

  const handleUserSelect = (userAnswer: string) =>
    setQuizQns(quizQns.map(i => (i.question === currentQn.question ? { ...i, userAnswer } : i)));

  const totalCorrect = quizQns.filter(i => i.userAnswer === i.correctAnswer).length;

  return { moveNext, movePre, handleUserSelect, currentQn, index, totalCorrect };
};

export default useQuiz;
