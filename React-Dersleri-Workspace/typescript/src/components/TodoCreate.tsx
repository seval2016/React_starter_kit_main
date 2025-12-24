import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import type { TodoType } from "../types/Types";
import { createTodo } from "../redux/todoSlice";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Todo Giriniz");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 1000),
      title: newTodo,
      completed: false,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };

  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: "auto",
        mt: 5,
        p: 3,
        border: "2px solid #ffffffff",
        borderRadius: 2,
      }}
    >
      {/* INPUT ALANI */}
      <Stack direction="row" spacing={2}>
        <TextField
          fullWidth
          label="Todo Giriniz"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
        <Button
          variant="contained"
          onClick={handleCreateTodo}
          sx={{ minWidth: 160 }}
        ></Button>
      </Stack>

      <TodoList />
    </Box>
  );
}

export default TodoCreate;
