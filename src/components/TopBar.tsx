import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  MenuItem,
  Typography,
  Menu,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddIcon from "@mui/icons-material/Add";
import { useCallback, useState } from "react";
import logout from "@/helpers/logout";
import { useNavigate } from "react-router";
import AddTaskDialog from "@/dialogs/AddTaskDialog";

const TopBar = () => {
  const nav = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [isAddTaskDialogOpen, setIsAddTaskDialogOpen] = useState(false);

  const handleOpenUserMenu = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget);
    },
    []
  );

  const handleCloseUserMenu = useCallback(() => {
    setAnchorElUser(null);
  }, []);

  const handleLogout = useCallback(() => {
    logout();
    nav("/");
    setAnchorElUser(null);
  }, [nav]);

  const handleAddTaskDialogOpen = useCallback(() => {
    setIsAddTaskDialogOpen(true);
  }, []);
  const handleAddTaskDialogClose = useCallback(() => {
    setIsAddTaskDialogOpen(false);
  }, []);

  return (
    <>
      <AddTaskDialog
        open={isAddTaskDialogOpen}
        onClose={handleAddTaskDialogClose}
      />
      <AppBar
        position="static"
        sx={{
          mx: 0,
          px: 2,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
        }}
      >
        <Toolbar disableGutters sx={{}}>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              onClick={handleAddTaskDialogOpen}
              sx={{ my: 2, color: "white" }}
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{
                  color: "white",
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleLogout}>
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default TopBar;
