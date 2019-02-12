/**
 * E-Book-Reader APP
 * 
 * Store
 * 
 * @author Awoyo Oluwatoyin <awoyotoyin@gmail.com>
 * @package E-Book-Reader
 */
import { applyMiddleware, compose, createStore } from 'redux'
import { combineEpics, createEpicMiddleware } from 'redux-observable'
import promise from 'redux-promise'

import { loginEpic } from './epics'
import rootReducer from './reducers'

const rootEpic = combineEpics(loginEpic)

const epicMiddleware = createEpicMiddleware()

const middleware = [epicMiddleware, promise]

const enhancers = []

const Store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        ...enhancers,
    ),
)

epicMiddleware.run(rootEpic)

export default Store
