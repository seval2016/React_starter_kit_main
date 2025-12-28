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

import "./login.scss";

const Login = () => {
  return (
    <Box className="login">
      <Card className="login__card">
        <CardContent className="login__content">
          <Typography className="login__title">
            Welcome Back 👋
          </Typography>

          <Typography className="login__subtitle">
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
            className="login__button"
          >
            Login
          </Button>

          <Typography className="login__forgot">
            Forgot your password?
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
