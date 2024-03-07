import { useState, useEffect, useRef } from "react";

export interface ClickOutsideProps extends React.HTMLAttributes<HTMLDivElement> {
  onClickOutside: (e: MouseEvent | TouchEvent) => void;
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: any;
}
const ClickOutside: React.FC<ClickOutsideProps> = ({
  style,
  onClickOutside,
  children,
  ...props
}) => {
  const [isTouch, setisTouch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function handle(e: MouseEvent | TouchEvent) {
    if (e.type === "touchend") setisTouch(true);
    if (e.type === "click" && isTouch) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el: any = containerRef.current;
    if (el && !el.contains(e.target)) onClickOutside(e);
  }

  useEffect(() => {
    document.addEventListener("touchend", handle, true);
    document.addEventListener("click", handle, true);
    document.addEventListener("contextmenu", handle, true);

    return () => {
      document.removeEventListener("touchend", handle, true);
      document.removeEventListener("click", handle, true);
      document.removeEventListener("contextmenu", handle, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const propsStyle = style || {};

  return (
    <div ref={containerRef} style={{ ...propsStyle }} {...props}>
      {children}
    </div>
  );
};

export default ClickOutside;
