import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_DONE,
  TOGGLE_IMPORTANT,
  CHANGE_TERM,
  CHANGE_FILTER
} from './types.js'

// action creator
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