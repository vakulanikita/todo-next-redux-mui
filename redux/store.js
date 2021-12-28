import { createStore, combineReducers, applyMiddleware, useSelector } from 'redux'
// import { cashReducer } from './cashReducer';
// import { customerReducer } from './customerReducer';
import { todoReducer } from './reducers/todoReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));