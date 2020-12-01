import { GetStaticProps } from 'next';

import AnswerBtn from '../components/AnswerBtn';
import BtnGrp from '../components/BtnGrp';
import Card from '../components/Card';
import FinalScore from '../components/FinalScore';
import GeneralBtn from '../components/GeneralBtn';
import TopText from '../components/TopText';
import useQuiz from '../hooks/useQuiz';
import getAPIResp from '../utils/apiResp';
import { IQuestion } from '../utils/types';

const AppHome = ({ data }: { data: IQuestion[] }) => {
  const { currentQn, index, moveNext, movePre, totalCorrect } = useQuiz(data);

  const topTxt = index === 10 ? 'Your Score' : currentQn.question;

  return (
    <>
      <TopText txt={topTxt} />
      <Card>
        {index === 10 ? <FinalScore score={totalCorrect} /> : currentQn.allOptions.map(i => <AnswerBtn key={i} />)}
      </Card>
      <BtnGrp>
        <GeneralBtn txt="Previous" pos={1} onClick={movePre} disabled={index === 0} />
        <GeneralBtn txt="Next" pos={2} onClick={moveNext} disabled={index === 10} />
      </BtnGrp>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAPIResp();
  return { props: { data }, revalidate: 1 };
};

export default AppHome;
