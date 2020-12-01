export interface IAPIRespResults {
  type: string;
  question: string;
  category: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface IAPIResp {
  response_code: number;
  results: IAPIRespResults[];
}

export interface IQuestion {
  question: string;
  allOptions: string[];
  correctAnswer: string;
  userAnswer: string | null;
}

export interface IBtnCls {
  btn: string;
  span1: string;
  span2: string;
  alpha: string | null;
}

export type TBtnState = 'init' | 'correct' | 'incorrect';
