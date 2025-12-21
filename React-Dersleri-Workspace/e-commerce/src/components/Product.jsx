import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  Rating,
  Button,
} from "@mui/material";

import useAddToBasket from "../hooks/useAddToBasket";

export default function Product({ product }) {
  const navigate = useNavigate();
  const addToBasket = useAddToBasket();

  const { id, title, description, price, rating, category, image } = product;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        boxShadow: 4,
        transition: "0.3s",
        "&:hover": { boxShadow: 8, transform: "translateY(-4px)" },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={image}
        alt={title}
        sx={{ objectFit: "contain", p: 2 }}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" noWrap>
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2 }}
          noWrap
        >
          {description}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Chip label={category} size="small" />
          {rating && (
            <Rating
              value={rating.rate}
              precision={0.5}
              readOnly
              size="small"
              sx={{ ml: 1 }}
            />
          )}
        </Box>

        <Typography variant="h6" color="primary" fontWeight="bold">
          {price}₺
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            size="small"
            onClick={() => addToBasket(product)}
          >
            Sepete Ekle
          </Button>

          <Button
            fullWidth
            variant="outlined"
            size="small"
            onClick={() => navigate(`/product-details/${id}`)}
          >
            Detay
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
