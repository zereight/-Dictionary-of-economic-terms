import { useGetExcelDataQuery } from '@/services/modules/econimicTerms';

export type EconomicTerm = {
  title: string;
  desc: string;
  exampleNews: string;
};

const useGetEconomicTerms = () => {
  const { data, isFetching } = useGetExcelDataQuery(true);

  const newData: EconomicTerm[] =
    data?.values.slice(1).map(item => {
      return {
        title: item[0],
        desc: item[1],
        exampleNews: item[2],
      };
    }) || [];

  return {
    data: newData,
    isFetching,
  };
};

export default useGetEconomicTerms;
