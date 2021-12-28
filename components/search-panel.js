import { useSelector, useDispatch } from 'react-redux';
import { ChangeSearchTerm } from '../redux/actions';
import { Input } from '@chakra-ui/react'
import { useTodoContext } from '../context/todo-context';

export default function SearchPanel() {

  // const {term, setTerm} = useTodoContext();
  const dispatch = useDispatch()
  const term = useSelector(state => state.todoReducer.term)

  return (
    <Input 
      flexGrow="1"
      mr="1"
      w="auto"
      bg="white"
      type="text"
      placeholder="type to search"
      onChange={e => {dispatch(ChangeSearchTerm(e.target.value))}}
      value={term}
    />
  )
};