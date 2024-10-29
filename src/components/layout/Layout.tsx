import { ScrollRestoration } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      {children}
      <ScrollRestoration />
    </>
  );
}

export default Layout;