interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <main className="relative flex flex-col max-w-lg min-h-screen px-4 pt-8 mx-auto sm:pt-12">{children}</main>
);

export default MainLayout;
