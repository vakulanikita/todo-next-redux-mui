import { useDispatch, useSelector } from 'react-redux';
import { ChangeFilter } from '../redux/actions';
import { ButtonGroup, Button } from '@mui/material'

export default function ItemStatusFilter() {
  const filter = useSelector(state => state.todoReducer.filter)
  const dispatch = useDispatch()

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ]

  const elements = buttons.map(({name, label}) => {
    const isActive = filter === name;
    const clazz = isActive ? 'contained' : 'outlined';
    return (
      <Button
        _focus={{
          boxShadow: '0'
        }}
        color="primary"
        variant={clazz}
        key={name}
        onClick={() => dispatch(ChangeFilter(name))}
      >
      {label}
      </Button>
    )
  })

  return (
    <ButtonGroup>
      { elements }
    </ButtonGroup>
  );
}