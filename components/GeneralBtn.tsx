interface GeneralBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  txt: string;
  pos?: 1 | 2;
}

const GeneralBtn = ({ txt, pos, ...props }: GeneralBtnProps) => {
  const { className, disabled } = props;

  const cls = `select-none w-full py-2 text-lg font-semibold tracking-wide text-center bg-white border rounded-md border-trueGray-800 ${
    disabled
      ? 'cursor-not-allowed opacity-60'
      : 'hover:bg-trueGray-800 hover:text-white focus:bg-trueGray-800 focus:text-white focus:outline-none'
  } ${pos && (pos === 1 ? 'border-r-0 rounded-r-none' : 'rounded-l-none')} ${className}`;

  return (
    <button {...props} className={cls}>
      {txt}
    </button>
  );
};

export default GeneralBtn;
