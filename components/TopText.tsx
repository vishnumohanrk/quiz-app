interface TopTextProps {
  txt: string;
}

const TopText = ({ txt }: TopTextProps) => (
  <p className="text-2xl text-center top-text">
    <span className="inline px-2 font-bold bg-white rounded-md">{txt}</span>
  </p>
);

export default TopText;
