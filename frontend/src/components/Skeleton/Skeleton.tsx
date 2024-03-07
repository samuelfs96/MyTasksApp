export type SkeletonProps = {
  // types...
  style?: React.CSSProperties;
};

const Skeleton: React.FC<SkeletonProps> = ({style}) => {
  return (
    <div
      style={style}
      className="flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    />
  );
};

export default Skeleton;
