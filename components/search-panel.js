import { useSelector, useDispatch } from 'react-redux';
import { ChangeSearchTerm } from '../redux/actions';
import { TextField, Box } from '@mui/material'
export default function SearchPanel() {
  const dispatch = useDispatch()
  const term = useSelector(state => state.todoReducer.term)

  return (
    <TextField
      placeholder="type to search"
      onChange={e => {dispatch(ChangeSearchTerm(e.target.value))}}
      value={term}
      sx={{
        w: 'auto',
        padding: 0,
        flexGrow: 1,
        marginRight: '4px',
        
      }}
    />
  )
};