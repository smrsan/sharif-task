import logout from "@/helpers/logout";
import { Button } from "@mui/material";
import { useCallback } from "react";
import { useNavigate } from "react-router";

const DashboardPage = () => {
  const nav = useNavigate();

  const handleLogout = useCallback(() => {
    logout();
    nav("/");
  }, [nav]);

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default DashboardPage;
