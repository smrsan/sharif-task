import isLogin from "@/helpers/isLogin";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import TopBar from "@/components/TopBar";

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
      }}
    >
      <TopBar />
      <Outlet />
    </Container>
  );
};

export default DashboardLayout;
