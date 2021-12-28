import { createStore, combineReducers, applyMiddleware } from 'redux'
import { todoReducer } from './reducers/todo-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));