import { EconomicTerm } from '@/hooks/useGetEconomicTerms';

interface Props {
  originalData: EconomicTerm[];
  searchTerm: string;
}

const useSearch = (props: Props) => {
  const { originalData, searchTerm } = props;

  const filteredData = originalData.filter(item => {
    return item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return {
    filteredData,
  };
};

export default useSearch;
