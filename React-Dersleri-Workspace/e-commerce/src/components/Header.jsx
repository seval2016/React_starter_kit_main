import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Avatar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../assets/logo.png";

function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* SOL - LOGO */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="MyShop Logo"
            sx={{
              height: 60,
              cursor: "pointer",
            }}
          />
        </Box>

        {/* ORTA - MENU */}
        <Box sx={{ display: "flex", gap: 4 }}>
          <Typography sx={{ cursor: "pointer" }}>Ana Sayfa</Typography>
          <Typography sx={{ cursor: "pointer" }}>Ürünler</Typography>
          <Typography sx={{ cursor: "pointer" }}>Kampanyalar</Typography>
          <Typography sx={{ cursor: "pointer" }}>İletişim</Typography>
        </Box>

        {/* SAĞ - KULLANICI & SEPET */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Kullanıcı */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              <PersonIcon />
            </Avatar>
            <Typography variant="body2">Seval</Typography>
          </Box>

          {/* Sepet */}
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
    </AppBar>
  );
}

export default Header;
