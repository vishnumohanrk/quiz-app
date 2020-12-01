const AnswerBtn = () => {
  return (
    <button className="flex items-center w-full py-2 pl-3 mt-1 mb-4 text-xl text-justify border-2 border-gray-400 rounded-full">
      <span
        className="inline-flex items-center justify-center px-2 py-px font-semibold rounded-full text-trueGray-600 border-trueGray-600"
        style={{ borderWidth: '3px' }}
      >
        A
      </span>
      <span className="w-full px-2 text-lg font-medium text-gray-600">Burt Macklin</span>
    </button>
  );
};

export default AnswerBtn;
