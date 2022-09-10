
import { createStore ,applyMiddleware } from 'redux'
import { moviesReducer } from '../reducer/movieReducer'
import  thunk from 'redux-thunk'
import {composeWithDevTools } from 'redux-devtools-extension'
//1-create store
export const store = createStore(moviesReducer, composeWithDevTools(applyMiddleware(thunk)));