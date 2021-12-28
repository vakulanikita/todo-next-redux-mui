import { nanoid } from 'nanoid'

const initialState = {
  todoData: [createTodoItem('Drink Coffee')],
  term: '',
  filter: 'all'
}

function createTodoItem(label) {
  return {
    label,
    important: false,
    done: false,
    id: nanoid(8),
  }
}

function toggleProperty(arr, id, propName) {
  const idx = arr.findIndex((el) => el.id === id)
  // 1. update object
  const oldItem = arr[idx];
  const newItem = {...oldItem, [propName]: !oldItem[propName]}; // избежали изменения state напрямую
  // 2. construct and return new array
  return [
    ...arr.slice(0, idx),
    newItem,
    ...arr.slice(idx + 1)
  ]
}


export const todoReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_TODO':
      const newItem = createTodoItem(action.payload);
      return {...state, todoData: [...state.todoData, newItem]}

    case 'REMOVE_TODO':
      const idx = state.todoData.findIndex((el) => el.id === action.payload)
      return {
        ...state,
        todoData: [
          ...state.todoData.slice(0, idx),
          ...state.todoData.slice(idx + 1)
        ]
      };

    case 'TOGGLE_DONE':
      return {...state, todoData: toggleProperty(state.todoData, action.payload, 'done')}

    case 'TOGGLE_IMPORTANT':
      return {...state, todoData: toggleProperty(state.todoData, action.payload, 'important')}

    case 'CHANGE_TERM':
      return {...state, term: action.payload}

    case 'CHANGE_FILTER':
      return {...state, filter: action.payload}

    default:
      return state;
  }
}