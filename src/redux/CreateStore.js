import { createStore, applyMiddleware, compose } from 'redux'

export default (rootReducer) => {
	const middleware = []
	const enchancers = []
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	enchancers.push(applyMiddleware(...middleware))

	const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
		applyMiddleware(...middleware)
	));

	return store
}
