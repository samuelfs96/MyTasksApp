export type FooterProps = {
  // types...
};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="p-6 flex justify-center mt-6">
      <span className="text-slate-600 text-sm dark:text-white">© 2024</span>
    </div>
  );
};

export default Footer;
