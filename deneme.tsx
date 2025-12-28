import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Card
        sx={{
          width: 380,
          borderRadius: 4,
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography
            variant="h5"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
          >
            Welcome Back 👋
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            textAlign="center"
            mb={3}
          >
            Please login to your account
          </Typography>

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.2,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
              background:
                "linear-gradient(135deg, #667eea, #764ba2)",
            }}
          >
            Login
          </Button>

          <Typography
            variant="body2"
            textAlign="center"
            mt={2}
            color="text.secondary"
          >
            Forgot your password?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
