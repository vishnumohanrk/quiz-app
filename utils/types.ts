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
