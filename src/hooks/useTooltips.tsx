import { useEffect, useRef } from "react";

export default function useTooltips(p: {
  children: JSX.Element;
  text: string;
}) {
  const childRef = useRef(undefined as unknown as Element);

  async function importBootstrap() {
    const bootstrap = await import("bootstrap");
    const t = new bootstrap.Tooltip(childRef.current, {
      title: p.text,
      placement: "right",
      trigger: "hover",
    });
    return () => t.dispose();
  }

  useEffect(() => {
    importBootstrap();
  }, [p.text]);

  return { childRef };
}
