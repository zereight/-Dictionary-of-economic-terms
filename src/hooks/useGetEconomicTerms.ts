import { useGetExcelDataQuery } from '@/services/modules/econimicTerms';

export type EconomicTerm = {
  title: string;
  exampleNews: string;
  imagUrl: string;
  previewDesc: string;
  desc: string;
};

const useGetEconomicTerms = () => {
  const { data, isFetching } = useGetExcelDataQuery(true);

  const newData: EconomicTerm[] =
    data?.values.slice(1).map(item => {
      return {
        title: item[0],
        exampleNews: item[1],
        imagUrl: item[2],
        previewDesc: item[3],
        desc: item[4],
      };
    }) || [];

  return {
    data: newData,
    isFetching,
  };
};

export default useGetEconomicTerms;
