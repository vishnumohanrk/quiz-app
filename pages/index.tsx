import { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';

import AnswerBtn from '../components/AnswerBtn';
import BtnGrp from '../components/BtnGrp';
import Card from '../components/Card';
import FinalScore from '../components/FinalScore';
import GeneralBtn from '../components/GeneralBtn';
import TopText from '../components/TopText';
import useQuiz from '../hooks/useQuiz';
import getAPIResp from '../utils/apiResp';
import { btnCls, getAnsBtnState, optionAlphabets } from '../utils/helper';
import { IQuestion } from '../utils/types';

const AppHome = ({ data }: { data: IQuestion[] }) => {
  const { currentQn, index, moveNext, movePre, totalCorrect, handleUserSelect } = useQuiz(data);
  const [anim, setAnim] = useState('');

  const topTxt = index === 10 ? 'Your Score' : currentQn.question;

  useEffect(() => {
    if (index < 10) {
      if (currentQn.userAnswer && !anim) {
        setAnim(
          currentQn.userAnswer === currentQn.correctAnswer ? 'animate-scale-and-scale' : 'animate-wobble-hor-bottom',
        );
      }
    }
  }, [index, anim, currentQn?.userAnswer, currentQn?.correctAnswer]);

  useEffect(() => setAnim(''), [index]);

  return (
    <>
      <TopText txt={topTxt} />
      <Card anim={anim} key={anim}>
        {index === 10 ? (
          <FinalScore score={totalCorrect} />
        ) : (
          currentQn.allOptions.map((i, j) => {
            const help = btnCls(getAnsBtnState(currentQn.userAnswer, currentQn.correctAnswer, i));
            return (
              <AnswerBtn
                key={i}
                txt={i}
                btnCls={help}
                onPress={handleUserSelect}
                shouldDisable={currentQn.userAnswer !== null}
                optionAlpha={help.alpha || optionAlphabets[j as 0 | 1 | 2 | 3]}
              />
            );
          })
        )}
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
