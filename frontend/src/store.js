import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import rootreducer from './reducers'

const initialState = {};

const store = createStore(
	rootreducer,
	initialState,
	compose(applyMiddleware(thunk))
)

export default store;