interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <main className="relative flex flex-col max-w-lg min-h-screen px-4 pt-14 pb-0 mx-auto sm:pt-6">{children}</main>
);

export default MainLayout;
