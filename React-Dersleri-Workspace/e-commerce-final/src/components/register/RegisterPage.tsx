import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  CircularProgress,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

import "./Register.scss";
import { useFormik } from "formik";
import { registerSchema } from "../../validations/RegisterPageSchema";
import RegisterPageService from "../../services/RegisterPageService";
import { showSuccess, showError } from "../../utils/toast";
import type { UserType } from "../../types/Types";

const Register = () => {
  const formik = useFormik<UserType>({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      try {
        await RegisterPageService.register(values);

        showSuccess("Kayıt başarılı 🎉");
        actions.resetForm();
      } catch (error: any) {
        showError(
          error?.response?.data?.message || "Bir hata oluştu ❌"
        );
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  const {
    values,
    handleSubmit,
    handleChange,
    errors,
    touched,
    isSubmitting,
    resetForm,
  } = formik;

  return (
    <Box className="register">
      <Card className="register__card">
        <CardContent className="register__content">
          <Typography className="register__title">
            Create Account ✨
          </Typography>

          <Typography className="register__subtitle">
            Sign up to get started
          </Typography>

          <form onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Username"
              id="userName"
              value={values.userName}
              onChange={handleChange}
              margin="normal"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                },
              }}
              error={Boolean(touched.userName && errors.userName)}
              helperText={touched.userName && errors.userName}
            />

            <TextField
              fullWidth
              label="Email"
              id="email"
              value={values.email}
              onChange={handleChange}
              margin="normal"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                },
              }}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              margin="normal"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                },
              }}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              margin="normal"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                },
              }}
              error={Boolean(
                touched.confirmPassword && errors.confirmPassword
              )}
              helperText={
                touched.confirmPassword && errors.confirmPassword
              }
            />

            <Box className="register__buttons">
              <Button
                fullWidth
                variant="contained"
                className="register__button"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Kayıt Ol"
                )}
              </Button>

              <Button
                fullWidth
                variant="outlined"
                className="register__button"
                type="button"
                onClick={() => resetForm()}
                disabled={isSubmitting}
              >
                Clear
              </Button>
            </Box>
          </form>

          <Typography className="register__footer">
            Already have an account? Login
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
