import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  'X-RapidAPI-Key': 'ed6ba45b10mshffd7d567fdb2362p1b9d58jsn6be4fe5a332d',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  
    
   };
// Base URL
const baseUrl = "https://api.coinranking.com/v2";

// Make API Request
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

// Crypto API Redux Logic
export const cryptoApis = createApi({

  reducerPath: "cryptoApis",

  // function that except a object base url
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timePeriod=${timePeriod}`),
    }),
    getCryptoSearch: builder.query({
      query: (searchedTerm) =>
        createRequest(`search-suggestions?query=${searchedTerm}`),
    }),
  }),
});

// Export Crypto API
export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoSearchQuery,
} = cryptoApis;