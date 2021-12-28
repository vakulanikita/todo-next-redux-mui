import {
  Container,
  Box,
  Stack
} from '@mui/material'
import TodoHeader from '../components/todo-header';
import SearchPanel from '../components/search-panel';
import TodoList from '../components/todo-list';
import ItemStatusFilter from '../components/item-status-filter';
import ItemAddForm from '../components/item-add-form';

export default function App() {
  return (
    <Container maxWidth="xs">

      <Box my={4}>
        <TodoHeader />

        <Stack direction="row" my={2}>
          <SearchPanel/>
          <ItemStatusFilter />
        </Stack>

        <TodoList />

        <ItemAddForm />
      </Box>
      
    </Container>
  )
}