import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
  InputBase,
  Container,
  Drawer,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";

function Header() {
  const { isDark, toggleTheme } = useTheme();

  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const [open, setOpen] = useState(false);

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: isDark ? "#1e1e1e" : "#ffffff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          
          {/* SOL - LOGO & MENU ICON */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            )}

            <Box
              component="img"
              src={logo}
              alt="MyShop Logo"
              sx={{ height: 60, cursor: "pointer" }}
            />
          </Box>

          {/* ORTA - MENU + SEARCH (Desktop) */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Box sx={{ display: "flex", gap: 3 }}>
                <Typography sx={{ cursor: "pointer" }}>Ana Sayfa</Typography>
                <Typography sx={{ cursor: "pointer" }}>Ürünler</Typography>
                <Typography sx={{ cursor: "pointer" }}>İletişim</Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  border: "1px solid #ddd",
                  width: 250,
                }}
              >
                <SearchIcon sx={{ color: "gray", mr: 1 }} />
                <InputBase placeholder="Ürün ara..." fullWidth />
              </Box>
            </Box>
          )}

          {/* SAĞ - ACTIONS */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            
            {/* THEME TOGGLE */}
            <IconButton onClick={toggleTheme}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar sx={{ width: 30, height: 30 }}>
                  <PersonIcon />
                </Avatar>
                <Typography variant="body2">Seval</Typography>
              </Box>
            )}

            <IconButton>
              <Badge
                badgeContent={3}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#B3D838",
                    color: "#555",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography sx={{ mb: 2, fontWeight: 600 }}>Menü</Typography>
          <Typography sx={{ mb: 1 }}>Ana Sayfa</Typography>
          <Typography sx={{ mb: 1 }}>Ürünler</Typography>
          <Typography>İletişim</Typography>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
