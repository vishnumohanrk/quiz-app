import CardHeader from './CardHeader';

interface CardProps {
  children: React.ReactNode;
  anim: string;
}

const Card = ({ children, anim }: CardProps) => (
  <section className={`flex-1 w-full max-w-xs mx-auto mt-10 sm:max-w-sm ${anim}`}>
    <CardHeader />
    <div className="flex flex-col p-3 pt-4 sm:px-5 sm:py-6 bg-white rounded-b-lg">{children}</div>
  </section>
);

export default Card;
