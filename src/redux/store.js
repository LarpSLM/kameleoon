import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger"
import mainPageReducer from "../pages/main/reducer";
import thunk from "redux-thunk";

const logger = createLogger({
    collapsed: true
});

const reducers = combineReducers({
    main: mainPageReducer,
})

const middlewares = [logger, thunk]

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store;