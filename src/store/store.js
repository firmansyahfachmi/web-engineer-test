import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'

import reducers from './reducers/index'
import promiseMiddleware from "redux-promise-middleware";

const logger = createLogger()

const store = createStore(reducers, applyMiddleware(logger, promiseMiddleware))

export default store;