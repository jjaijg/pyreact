import { getDefaultMiddleware, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import names from "./reducers/names";
import selectedName from "./reducers/selectedName";

const reducer = {
  names,
  selectedName,
};
// Added logger to debug in dev mode
const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});
