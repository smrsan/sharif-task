import isLogin from "@/helpers/isLogin";
import { Box, Container } from "@mui/material";
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
    <Box
      sx={{
        bgcolor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          minHeight: "100vh",
        }}
      >
        <TopBar />
        <Outlet />
      </Container>
    </Box>
  );
};

export default DashboardLayout;
