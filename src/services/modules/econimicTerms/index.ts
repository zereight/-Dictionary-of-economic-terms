import { api } from '../../api';

export type ExcelData = {
  values: string[][];
};

export const excelDataApi = api.injectEndpoints({
  endpoints: build => ({
    getExcelData: build.query<ExcelData, boolean>({
      query: enabled => {
        if (!enabled) {
          return '';
        }

        return `https://sheets.googleapis.com/v4/spreadsheets/1Oo8Lx0hZH3ZXhVHodAM6LAsearTdrfxNafryCOuowzs/values/시트1/?key=${process.env.GOOGLE_SHEET_API}`;
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetExcelDataQuery } = excelDataApi;
