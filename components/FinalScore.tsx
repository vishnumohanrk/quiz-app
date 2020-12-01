interface FinalScoreProps {
  score: number;
}

const FinalScore = ({ score }: FinalScoreProps) => (
  <div className="flex flex-col items-center justify-center py-12 text-6xl font-semibold">
    <p className={score < 5 ? 'text-red-500' : 'text-green-500'}>{score}</p>
    <div className="w-full my-4 border rounded-md bg-coolGray-300 border-coolGray-300"></div>
    <p>10</p>
  </div>
);

export default FinalScore;
