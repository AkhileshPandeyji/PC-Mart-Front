import {
	createStore,
	combineReducers,
	applyMiddleware,
	Middleware,
	Reducer,
} from "redux";
import thunk from "redux-thunk";
import authDetails from "./modules/authDetails";

const logger: Middleware<{}, any> = (state) => (next) => (action) => {
	console.log("ACTION: " + action.type);
	return next(action);
};

const rootReducer = combineReducers({ authDetails });
const store = createStore(rootReducer, applyMiddleware(thunk,logger));
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
