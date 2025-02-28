

import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listReducer.js"

const store = configureStore({
      reducer: {
            listSlice
      }
})


export {
      store
}


