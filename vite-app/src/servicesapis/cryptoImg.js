import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// https://rapidapi.com/MatcherLabs/api/news-api14
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "ec36c69e06msh906fe2fdc7a28f3p109687jsn539ca43c9c84",
  "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
};

const baseUrl = "https://duckduckgo10.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search/images?term=${newsCategory}&region=wt-wt&safeSearch=off`
        ),
    }),
  }),
});
export const { useGetCryptoImgQuery } = cryptoImg;