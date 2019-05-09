import {
    applyMiddleware,
    createStore,
    compose
} from 'redux'
import thunk from 'redux-thunk'
import RootR from './RootR'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}
const store = createStore(RootR, initialState, composedEnhancers)

export default store;