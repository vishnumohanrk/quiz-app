import { IBtnCls, TBtnState } from './types';

export const btnCls = (id: TBtnState): IBtnCls => {
  switch (id) {
    case 'init':
      return { btn: '', span1: 'text-trueGray-600 border-trueGray-600', span2: 'text-gray-600', alpha: null };
    case 'correct':
      return { btn: 'bg-green-500', span1: 'text-white border-white', span2: 'text-white', alpha: '✔' };
    case 'incorrect':
      return { btn: 'bg-red-500', span1: 'text-white border-white', span2: 'text-white', alpha: 'X' };
  }
};

export const getAnsBtnState = (userAnswer: string | null, correctAnswer: string, btnTxt: string): TBtnState => {
  if (userAnswer === null) return 'init';
  if (userAnswer && userAnswer === correctAnswer && userAnswer === btnTxt) return 'correct';
  if (userAnswer && userAnswer !== correctAnswer && userAnswer === btnTxt) return 'incorrect';
  if (userAnswer && userAnswer !== correctAnswer && btnTxt === correctAnswer) return 'correct';
  return 'init';
};

export const optionAlphabets = { 0: 'A', 1: 'B', 2: 'C', 3: 'D' };
