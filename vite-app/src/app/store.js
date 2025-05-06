import { configureStore } from "@reduxjs/toolkit";

import { cryptoApis } from "../servicesapis/cryptoApis";
import { cryptoNewsApi } from "../servicesapis/cryptoNews";

// we need to connect that api with our store :: use redux js

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApis.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApis.middleware, cryptoNewsApi.middleware),
   
})