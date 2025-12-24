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

function Todo() {
  return (
    <Box mt={4}>
      <Card
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
          <Typography>deneme</Typography>

          <Box>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Todo;
