import shuffle from 'lodash.shuffle';

import { IAPIResp, IQuestion } from './types';

const totalCategories = Array(24)
  .fill(0)
  .map((_, j) => 32 - j);

const getAPIResp = async (): Promise<IQuestion[]> => {
  const difficulty = shuffle(['easy', 'medium', 'hard'])[0];
  const category = shuffle(totalCategories)[0];

  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple&encode=url3986`;

  const resp = await fetch(url);

  if (resp.ok) {
    const data: IAPIResp = await resp.json();

    if (data.results.length) {
      return data.results.map(i => {
        const decodedOptions = [
          decodeURIComponent(i.correct_answer),
          ...i.incorrect_answers.map(i => decodeURIComponent(i)),
        ];

        return {
          allOptions: shuffle(decodedOptions),
          correctAnswer: decodedOptions[0],
          question: decodeURIComponent(i.question),
          userAnswer: null,
        };
      });
    }
  }

  throw new Error();
};

export default getAPIResp;
