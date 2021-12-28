import { useSelector } from 'react-redux';
import {
  List,
  ListItem
} from '@chakra-ui/react'
import TodoListItem from './todo-list-item';
// import { useTodoContext } from '../context/todo-context'


function TodoList() {
  function todoSearch(items, term) {
    if (term.length === 0) {
      return items;
    }
  
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }
  
  function todoFilter(items, filter) {
    // switch-блок, тк может быть 3(три!) разных фильтра
    switch(filter) {
      case 'all':
        return items;
      case 'active':
        return items.filter((item) => !item.done);
      case 'done':
        return items.filter((item) => item.done);
      default:
        return items;
    } 
  }
  const todoData = useSelector(state => state.todoReducer.todoData)
  const term = useSelector(state => state.todoReducer.term);
  const filter = useSelector(state => state.todoReducer.filter)
  const visibleItems = todoFilter(todoSearch(todoData, term), filter);
  // console.log(...todoData);

  const elements = visibleItems.map((item) => {
    return (
      <ListItem key={item.id}>
        {/* item = {id, label, important, done} */}
        <TodoListItem {...item} />
      </ListItem>
    );
  });

  return (
    <List>
      { elements }
    </List>
  );
};

export default TodoList;
