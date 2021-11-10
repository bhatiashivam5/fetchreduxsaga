import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./reducers/rootReducer";

import { onLoadUser } from "./sagas/userSagas";

const sagamiddleware = createSagaMiddleware();

const middlewares = [logger, sagamiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagamiddleware.run(onLoadUser);

export default store;