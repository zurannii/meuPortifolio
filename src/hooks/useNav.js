import { useState } from "react";

/**
 * useNav — manages the current page and scroll-to-top on navigation.
 * @returns {{ page: string, navigate: (page: string) => void }}
 */
export function useNav(initial = "home") {
  const [page, setPage] = useState(initial);

  const navigate = (target) => {
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return { page, navigate };
}
