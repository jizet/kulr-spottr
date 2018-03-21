import { combineReducers } from 'redux'
import configureStore from './CreateStore'

export default () => {
	const rootReducer = combineReducers({
		board: require('./BoardRedux').reducer,
	})

	return configureStore(rootReducer)
}
