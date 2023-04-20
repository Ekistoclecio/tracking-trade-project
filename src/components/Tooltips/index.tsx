import React from "react";
import useTooltips from "../../hooks/useTooltips";

export const Tooltip = (p: { children: JSX.Element; text: string }) => {
  const { childRef } = useTooltips(p);

  return React.cloneElement(p.children, { ref: childRef });
};
