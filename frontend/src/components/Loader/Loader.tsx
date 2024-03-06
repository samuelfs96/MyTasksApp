export type LoaderProps = {
  show: boolean;
};

const Loader: React.FC<LoaderProps> = ({ show }) => {
  return (
    show && <div className="fixed w-screen h-screen bg-black opacity-30" />
  );
};

export default Loader;
