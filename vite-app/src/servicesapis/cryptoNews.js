import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": 'ed6ba45b10mshffd7d567fdb2362p1b9d58jsn6be4fe5a332d',
  "X-RapidAPI-Host": "duckduckgo8.p.rapidapi.com",
};

const baseUrl = "https://duckduckgo8.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNews = createApi({
  reducerPath: "cryptoNews",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/?q=${newsCategory}`
        ),
    }),
  }),
});
export const { useGetCryptoNewsQuery } = cryptoNews;