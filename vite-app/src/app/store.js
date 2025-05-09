import { configureStore } from "@reduxjs/toolkit";

import { cryptoApis } from "../servicesapis/cryptoApis";
import { cryptoNews } from "../servicesapis/cryptoNews";

// we need to connect that api with our store :: use redux js

export default configureStore({
    reducer: {
        [cryptoApis.reducerPath]: cryptoApis.reducer,
        [cryptoNews.reducerPath]: cryptoNews.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApis.middleware, cryptoNews.middleware),
   
})