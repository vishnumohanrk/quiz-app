import CardHeader from './CardHeader';

interface CardProps {
  children: React.ReactNode;
  anim: string;
}

const Card = ({ children, anim }: CardProps) => (
  <section className={`flex-1 w-full max-w-xs mx-auto mt-5 md:mt-10 sm:max-w-sm ${anim}`}>
    <CardHeader />
    <div className="flex flex-col px-5 py-6 bg-white rounded-b-lg">{children}</div>
  </section>
);

export default Card;
