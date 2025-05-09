import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// https://rapidapi.com/MatcherLabs/api/news-api14
const cryptoNewsHeaders = {
  "X-RapidAPI-Key": 'ed6ba45b10mshffd7d567fdb2362p1b9d58jsn6be4fe5a332d',
  "X-RapidAPI-Host": 'real-time-image-search.p.rapidapi.com',
};

const baseUrl =  'https://real-time-image-search.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNews",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    // get cryptocurrencies
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/search?query=${newsCategory}&limit=${count}&size=any&color=any&type=any&time=any&usage_rights=any&file_type=any&aspect_ratio=any&safe_search=off&region=us'`
        ),
    }),
  }),
});
export const { useGetCryptoImgQuery } = cryptoImg;