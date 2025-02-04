import { ChangeEventHandler, useCallback, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Link, Paper, TextField } from "@mui/material";
import register from "@/helpers/register";

function RegisterPage() {
  const nav = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback<
    ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  >((event) => {
    setFormValues((p) => ({
      ...p,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleRegister = useCallback(async () => {
    register(formValues);
    nav("/dashboard");
  }, [formValues, nav]);

  return (
    <Paper
      sx={{
        width: "400px",
        maxWidth: "90vw",
        p: 2,
        display: "grid",
        gap: 2,
      }}
    >
      <TextField
        name="username"
        onChange={handleChange}
        value={formValues["username"]}
        label="Username"
        fullWidth
        autoFocus
        type="text"
      />
      <TextField
        name="email"
        onChange={handleChange}
        value={formValues["email"]}
        label="Email"
        fullWidth
        autoFocus
        type="email"
      />
      <TextField
        name="password"
        onChange={handleChange}
        value={formValues["password"]}
        label="Password"
        fullWidth
        type="password"
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
        <Button onClick={handleRegister}>Register</Button>
      </Box>
    </Paper>
  );
}

export default RegisterPage;
