import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Bloomify / ${title || "Loading..."}`;
  }, [title]);
  return null;
};
