import { useRouter } from 'next/router';

import GeneralBtn from './GeneralBtn';

interface BtnGrpProps {
  children: React.ReactNode;
}

const BtnGrp = ({ children }: BtnGrpProps) => {
  const router = useRouter();

  const startOver = () => router.reload();

  return (
    <div className="w-full max-w-xs mx-auto mt-10 mb-5 sm:max-w-sm">
      <div className="flex w-full">{children}</div>
      <GeneralBtn txt="Start Over" onClick={startOver} className="w-full mt-2" />
    </div>
  );
};

export default BtnGrp;
