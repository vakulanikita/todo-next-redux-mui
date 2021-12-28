import React from 'react';
import { useDispatch } from 'react-redux';
import {
  Input,
  Button,
  Flex,
  Box
} from '@chakra-ui/react'
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
        <Flex>
          <Input
            className="form-control" 
            type="text"
            bg="white"
            w="auto"
            flexGrow="1"
            mr="1"
            placeholder="What needs to be done"
            onChange={e => setLabel(e.target.value)}
            value={label}
          />
          <Button
            type="submit"
            className="btn btn-outline-secondary"
            colorScheme="purple"
            variant="outline"
          >
            Add Item
          </Button>
        </Flex>
      </form>
    </Box>
  )
}
