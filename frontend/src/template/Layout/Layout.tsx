import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="dark:bg-slate-900 min-h-screen flex flex-col justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
