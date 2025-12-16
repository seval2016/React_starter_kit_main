import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!text.trim()) return;

    if (editId) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, title: text } : todo
        )
      );
      setEditId(null);
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: text,
        },
      ]);
    }

    setText("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setText(todo.title);
    setEditId(todo.id);
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
          value={text}
          onChange={(e) => setText(e.target.value)}
        
        />
        <Button
          variant="contained"
          onClick={handleAddOrUpdate}
          sx={{ minWidth: 160 }}
        >
          {editId ? "Güncelle" : "ToDo Oluştur"}
        </Button>
      </Stack>

      {/* TODO LİSTESİ */}
      <Box mt={4}>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            sx={{
              mb: 2,
              border: "1px solid #ddd",
            }}
          >
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{todo.title}</Typography>

              <Box>
                <IconButton onClick={() => handleEdit(todo)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(todo.id)}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Todo;
