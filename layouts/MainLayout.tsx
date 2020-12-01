interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <main className="relative flex flex-col max-w-lg min-h-screen p-4 pb-0 mx-auto sm:pt-6">{children}</main>
);

export default MainLayout;
