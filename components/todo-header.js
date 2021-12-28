import React from "react";
import { useSelector } from "react-redux";
import {
  Flex,
  Heading
} from '@chakra-ui/react'
// import { useTodoContext } from '../context/todo-context';

export default function TodoHeader() {

  const todoData = useSelector(state => state.todoReducer.todoData)
  const doneCount = todoData.filter((el) => el.done).length;
  const todoCount = todoData.length - doneCount;

  // const { doneCount, todoCount } = useTodoContext()

  return (
    <Flex
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <Heading
        as="h1"
        flexFlow={1}
        lineHeight="shorter"
        fontWeight="bold"
      >
        Todo List
      </Heading>
      <Heading
        as="h2"
        fontSize="xl"
        color="gray.600"
        fontWeight="medium"
      >
        {todoCount} more to do, {doneCount} done
      </Heading>
    </Flex>
  );
};
