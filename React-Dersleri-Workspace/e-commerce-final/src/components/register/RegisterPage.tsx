import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import "./Register.scss";
import { useFormik } from "formik";
import { registerSchema } from "../../validations/RegisterPageSchema";

const Register = () => {
  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: registerSchema,
  });

  //console.log(formik.values);

  const clear = () => {
    resetForm();
  };

  return (
    <Box className="register">
      <Card className="register__card">
        <CardContent className="register__content">
          <Typography className="register__title">Create Account ✨</Typography>

          <Typography className="register__subtitle">
            Sign up to get started
          </Typography>

          <TextField
            fullWidth
            label="Username"
            margin="normal"
            id="username"
            value={values.userName}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              },
            }}
            error={errors.userName ? true : false}
            helperText={errors.userName}
          />

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            id="email"
            value={values.email}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              },
            }}
            error={errors.email ? true : false}
            helperText={errors.email}
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            id="password"
            value={values.password}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              },
            }}
            error={errors.password ? true : false}
            helperText={errors.password}
          />

          <TextField
            fullWidth
            label="Confirm Password"
            type="password"
            margin="normal"
            id="confirmPassword"
            value={values.password}
            onChange={handleChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              },
            }}
            error={errors.confirmPassword ? true : false}
            helperText={errors.confirmPassword}
          />
          <Box className="register__buttons">
            <Button
              fullWidth
              variant="outlined"
              className="register__button"
              type="button"
              onClick={clear}
            >
              Clear
            </Button>

            <Button
              fullWidth
              variant="contained"
              className="register__button"
              type="submit"
            >
              Register
            </Button>
          </Box>

          <Typography className="register__footer">
            Already have an account? Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
