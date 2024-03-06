import { ThemeButton } from "../ThemeButton";

export type NavbarProps = {
  // types...
};

const Navbar: React.FC<NavbarProps> = () => {
  return <div className="p-4 flex justify-end">
	<ThemeButton />
  </div>;
};

export default Navbar;
