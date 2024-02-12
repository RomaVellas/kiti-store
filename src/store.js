import { configureStore } from "@reduxjs/toolkit"; 

import reducer from "./reducers";

const enhancer = (configureStore) => (...args) => {
   const store = configureStore({...args});
   const originalDispatch = store.dispatch;
   store.dispatch = (action) => {
      if (typeof action === 'string') {
         return originalDispatch({
            type: action
         });
      }
      return originalDispatch(action);
}
   return store;
}

const store = configureStore({reducer}, enhancer);


export default store;