import isLogin from "@/helpers/isLogin";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

const DashboardLayout = () => {
  const nav = useNavigate();

  useEffect(() => {
    if (isLogin()) return;
    nav("/");
  }, [nav]);

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        bgcolor: (theme) => theme.palette.grey[200],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
