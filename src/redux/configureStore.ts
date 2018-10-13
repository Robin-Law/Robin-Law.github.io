import { applyMiddleware, compose, createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

export const middlewares = [

].map(middleware => applyMiddleware(middleware));

export const composedMiddlewares = compose().apply(null, middlewares);

export const store = createStore(RootReducer, {}, composedMiddlewares);

export default store;