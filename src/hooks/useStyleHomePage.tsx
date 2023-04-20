import { useEffect, useState } from "react";
import useDivSize from "./useDivSize";

export default function useStyleHomePage() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const [layoutWidth, setLayoutWidth] = useState(0);
  const [sideBarWidth, setSideBarWidth] = useState(0);
  const [contenteWidth, setContentWidth] = useState(0);

  const divRef = useDivSize((size: any) => {
    setSideBarWidth(size.width);
  });
  const LayoutRef = useDivSize((size: any) => {
    setLayoutWidth(size.width);
  });

  useEffect(() => {
    setContentWidth(() => layoutWidth - sideBarWidth);
  }, [layoutWidth, sideBarWidth]);

  return {
    sideBarIsOpen,
    divRef,
    LayoutRef,
    layoutWidth,
    sideBarWidth,
    contenteWidth,
    setSideBarIsOpen,
    setLayoutWidth,
    setSideBarWidth,
    setContentWidth,
  };
}
