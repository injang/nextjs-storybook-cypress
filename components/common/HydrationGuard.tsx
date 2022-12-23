import React, { useEffect, useState } from "react";

type props = {
  children?: JSX.Element | JSX.Element[];
};

export const HydrationGuard: React.FC<props> = ({ children }) => {
  const [element, setElement] = useState<JSX.Element | JSX.Element[]>();

  useEffect(() => {
    setElement(children);
  }, [children]);

  if (!element) {
    return <></>;
  }

  return <>{children}</>;
};
