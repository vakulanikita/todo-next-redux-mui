const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_DONE = 'TOGGLE_DONE';
const TOGGLE_IMPORTANT = 'TOGGLE_IMPORTANT';
const CHANGE_TERM = 'CHANGE_TERM';
const CHANGE_FILTER = 'CHANGE_FILTER'

export const AddTodoAction = (payload) => ({
  type: ADD_TODO,
  payload: payload
})

export const RemoveTodoAction = (payload) => ({
  type: REMOVE_TODO,
  payload: payload
})

export const ToggleDoneAction = (payload) => ({
  type: TOGGLE_DONE,
  payload: payload
})

export const ToggleImportantAction = (payload) => ({
  type: TOGGLE_IMPORTANT,
  payload: payload
})

export const ChangeSearchTerm = (payload) => ({
  type: CHANGE_TERM,
  payload: payload
})

export const ChangeFilter = (payload) => ({
  type: CHANGE_FILTER,
  payload: payload
})