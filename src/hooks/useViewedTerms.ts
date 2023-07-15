import { storage } from '@/App';

const useViewedTerms = () => {
  const addViewedTerm = (term: string) => {
    storage.set(term, true);
  };

  const removeViewedTerm = (term: string) => {
    storage.delete(term);
  };

  return {
    addViewedTerm,
    removeViewedTerm,
  };
};

export default useViewedTerms;
