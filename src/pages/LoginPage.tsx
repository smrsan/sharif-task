import { ChangeEventHandler, useCallback, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router";
import { Box, Button, Link, Paper, TextField } from "@mui/material";
import login from "@/helpers/login";

function LoginPage() {
  const nav = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "",
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

  const handleLogin = useCallback(async () => {
    login(formValues);
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
        <Link component={RouterLink} to="/register">
          Haven't an account?
        </Link>
        <Button onClick={handleLogin}>Login</Button>
      </Box>
    </Paper>
  );
}

export default LoginPage;
