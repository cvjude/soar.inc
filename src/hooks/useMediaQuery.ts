import { useState, useEffect } from 'react';

interface MediaQueryProps {
  query: string;
}

const useMediaQuery = (query: MediaQueryProps['query']): boolean => {
  const [matches, setMatches] = useState<boolean>(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);

    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

export default useMediaQuery;
