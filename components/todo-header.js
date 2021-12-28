import React from "react";
import { useSelector } from "react-redux";
import {
  Stack,
  Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors';

export default function TodoHeader() {
  const todoData = useSelector(state => state.todoReducer.todoData)
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Typography
        variant="h1"
        fontWeight="medium"
        sx={{lineHeight: 1.25, fontSize: "2.25rem"}}
      >
        Todo List
      </Typography>
      <Typography
        variant="h2"
        fontWeight="regular"
        color={grey[800]}
        sx={{fontSize: "1.25rem"}}
      >
        {todoCount} more to do, {doneCount} done
      </Typography>
    </Stack>
  );
};
