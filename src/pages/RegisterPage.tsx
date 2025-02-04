import { useCallback } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Link, Paper, TextField } from "@mui/material";
import registerHelper from "@/helpers/register";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const registerSchema = yup.object({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function RegisterPage() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const handleRegister = useCallback(
    async (formValues: any) => {
      registerHelper(formValues);
      nav("/dashboard");
    },
    [nav]
  );

  return (
    <Paper
      sx={{
        width: "400px",
        maxWidth: "90vw",
        p: 2,
        display: "grid",
        gap: 2,
      }}
      component="form"
      onSubmit={handleSubmit(handleRegister)}
    >
      <TextField
        label="Username"
        fullWidth
        autoFocus
        type="text"
        {...register("username")}
        error={errors.username != null}
        helperText={errors.username?.message}
      />
      <TextField
        label="Email"
        fullWidth
        autoFocus
        type="email"
        {...register("email")}
        error={errors.email != null}
        helperText={errors.email?.message}
      />
      <TextField
        label="Password"
        fullWidth
        type="password"
        {...register("password")}
        error={errors.password != null}
        helperText={errors.password?.message}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Link component={RouterLink} to="/login">
          Already have an account?
        </Link>
        <Button type="submit">Register</Button>
      </Box>
    </Paper>
  );
}

export default RegisterPage;
