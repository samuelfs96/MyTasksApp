export type SkeletonProps = {
  // types...
};

const Skeleton: React.FC<SkeletonProps> = () => {
  return (
    <div
      style={{ width: 300, height: 200 }}
      className="flex items-center justify-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
    />
  );
};

export default Skeleton;
