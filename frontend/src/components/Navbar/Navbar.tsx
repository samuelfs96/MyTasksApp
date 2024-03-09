import { ThemeButton } from "../ThemeButton";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  return <div className="p-6 flex justify-end shadow-sm">
	<ThemeButton />
  </div>;
};

export default Navbar;
