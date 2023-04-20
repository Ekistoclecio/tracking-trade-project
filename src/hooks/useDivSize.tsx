import { useEffect, useRef } from "react";

export default function useDivSize(callback: any) {
  const ref = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      callback({ width, height });
    });
    //@ts-ignore
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [callback]);

  return ref;
}
