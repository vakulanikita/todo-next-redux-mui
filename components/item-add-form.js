import React from 'react';
import { useDispatch } from 'react-redux';
import { Stack, TextField, Box, Button } from '@mui/material'
import { AddTodoAction } from '../redux/actions'

export default function ItemAddForm() {

  const dispatch = useDispatch()
  const [label, setLabel] = React.useState('')

  function onSubmit(e) {
    e.preventDefault();
    dispatch(AddTodoAction(label));
    setLabel('')
  }

  return (
    <Box mt="15px">
      <form onSubmit={onSubmit}>
        {/* Добавление value={label} сделало input controlled elem
            Также, когда React устанавливает value, это не приводит к onChange
            onChange() обновляет state, а state обновляет value */}
        <Stack flexDirection="row">
          <TextField
            placeholder="What needs to be done"
            onChange={e => setLabel(e.target.value)}
            value={label}
            sx={{
              w: 'auto',
              padding: 0,
              flexGrow: 1,
              marginRight: '4px',
            }}
          />
          <Button
            type="submit"
            className="btn btn-outline-secondary"
            colorScheme="purple"
            color="primary"
            variant="outlined"
          >
            Add Item
          </Button>
        </Stack>
      </form>
    </Box>
  )
}
