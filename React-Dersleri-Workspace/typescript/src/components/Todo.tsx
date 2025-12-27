import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import type { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { editTodoById, removeTodoById } from "../redux/todoSlice";

interface TodoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: TodoProps) {
  const { id, title, completed } = todoProps;
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleEditTodo = () => {
    setIsEditing(true);
  };

  const handleSaveTodo = () => {
    dispatch(
      editTodoById({
        id,
        title: editTitle,
        completed,
      })
    );
    setIsEditing(false);
  };

  return (
    <Box mt={4}>
      <Card sx={{ mb: 2, border: "1px solid #ddd" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          {isEditing ? (
            <TextField
              size="small"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              autoFocus
            />
          ) : (
            <Typography>{title}</Typography>
          )}

          <Box>
            {isEditing ? (
              <Button size="small" onClick={handleSaveTodo}>
                Kaydet
              </Button>
            ) : (
              <IconButton onClick={handleEditTodo}>
                <EditIcon />
              </IconButton>
            )}

            <IconButton onClick={handleRemoveTodo}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Todo;
