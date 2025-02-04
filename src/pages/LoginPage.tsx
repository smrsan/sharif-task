import { useCallback } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Link, Paper, TextField } from "@mui/material";
import login from "@/helpers/login";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function LoginPage() {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const handleLogin = useCallback(
    async (formValues: any) => {
      login(formValues);
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
      onSubmit={handleSubmit(handleLogin)}
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
        <Link component={RouterLink} to="/register">
          Haven't an account?
        </Link>
        <Button type="submit">Login</Button>
      </Box>
    </Paper>
  );
}

export default LoginPage;
