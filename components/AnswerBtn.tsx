import { IBtnCls } from '../utils/types';

interface AnswerBtnProps {
  txt: string;
  btnCls: IBtnCls;
  optionAlpha: string;
  shouldDisable: boolean;
  onPress: (ans: string) => void;
}

const AnswerBtn = ({ onPress, txt, optionAlpha, shouldDisable, btnCls }: AnswerBtnProps) => {
  const handleClick = () => onPress(txt);

  return (
    <button
      onClick={handleClick}
      disabled={shouldDisable}
      title={shouldDisable ? 'Not Allowed' : 'Choose Any One Option'}
      className={`flex items-center w-full py-2 pl-3 mt-1 mb-4 text-justify border-2 border-gray-400 rounded-full focus:outline-none focus:ring-2 select-none truncate ${
        shouldDisable && 'cursor-not-allowed'
      } ${btnCls.btn}`}
    >
      <span
        className={`inline-flex items-center text-lg sm:text-xl justify-center w-4 h-4 p-4 font-semibold rounded-full ${btnCls.span1}`}
        style={{ borderWidth: '3px' }}
      >
        {optionAlpha}
      </span>
      <span className={`w-full px-2 sm:text-lg font-medium ${btnCls.span2}`}>{txt}</span>
    </button>
  );
};

export default AnswerBtn;
