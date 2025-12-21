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
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { useTheme } from "../context/ThemeContext";
import Basket from "./Basket";

function Header() {
  const { isDark, toggleTheme } = useTheme();

  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const [basketOpen, setBasketOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const { products } = useSelector((state) => state.basket);

  const totalQuantity = products.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
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
            {/* SOL */}
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

            {/* ORTA */}
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

            {/* SAĞ */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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

              <IconButton onClick={() => setBasketOpen(true)}>
                <Badge
                  badgeContent={totalQuantity}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#80a019ff",
                      color: "#fff",
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>

        {/* MOBILE MENU */}
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 250, p: 2 }}>
            <Typography sx={{ mb: 2, fontWeight: 600 }}>Menü</Typography>
            <Typography sx={{ mb: 1 }}>Ana Sayfa</Typography>
            <Typography sx={{ mb: 1 }}>Ürünler</Typography>
            <Typography>İletişim</Typography>
          </Box>
        </Drawer>
      </AppBar>

      {/* 🛒 SEPET DRAWER */}
      <Drawer
        anchor="right"
        open={basketOpen}
        onClose={() => setBasketOpen(false)}
      >
        <Basket onClose={() => setBasketOpen(false)} />
      </Drawer>
    </>
  );
}

export default Header;
