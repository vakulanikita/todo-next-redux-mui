import {
  Stack,
  Typography,
  IconButton,
  Button
} from '@mui/material'
import { useDispatch } from 'react-redux';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToggleDoneAction, ToggleImportantAction, RemoveTodoAction } from '../redux/actions';

export default function TodoListItem({ id, done, important, label }) {
  const dispatch = useDispatch()

  return (
    <Stack
      flexDirection="row"
      alignItems="flex-start"
      justifyContent="space-between"
      borderRadius={1}
      sx={{
        fontSize: '1.25rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        px: 2,
        py: "6px",
        mb: 1
      }}
    >
      <Typography
        variant="h6"
        textDecoration={done ? "lineThrough" : "none"}
        color={important ? "green" : "inherit"}
        fontWeight={important ? "semibold" : "inherit"}
        sx={{
          textDecoration: `${done ? "line-through" : "none"}`,
          cursor: 'pointer'
        }}
        onClick={() => {dispatch(ToggleDoneAction(id))}}
      >
        {label}
      </Typography>

      <Stack flexDirection="row" flexWrap="nowrap">
        <IconButton
          sx={{
            marginRight: '4px',
            border: '1px solid green',
            borderRadius: '6px',
            color: 'green',
            padding: '6px'
          }}
          onClick={() => {dispatch(ToggleImportantAction(id))}}
        >
          <PriorityHighIcon fontSize="small" />
        </IconButton>
        
        <IconButton
          sx={{
            border: '1px solid red',
            borderRadius: '6px',
            color: 'red',
            padding: '6px'
          }}
          onClick={() => {dispatch(RemoveTodoAction(id))}}
        >
          <DeleteIcon fontSize="small"/>
        </IconButton>
      </Stack>

    </Stack>
  );
}
