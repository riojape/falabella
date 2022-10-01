import React, { useEffect, useRef } from "react";

const useOusiteClick = (setValue) => {
  const domNode = useRef(false);

  useEffect(() => {
    const handleMouseDown = (e) => {
      if (!domNode.current?.contains(e.target)) {
        setValue(false);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [domNode]);

  return [domNode];
};

export default useOusiteClick;
