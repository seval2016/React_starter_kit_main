import React from "react";
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Product({ product }) {
  const { id,title, description, price, rating, category, image } = product;
  const navigate = useNavigate();

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
        <Typography variant="h6" gutterBottom noWrap>
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
          ${price}
        </Typography>

        <Button
          onClick={() => navigate(`/product-details/${id}`)}
          fullWidth
          endIcon={<ArrowForwardIcon />}
          variant="outlined"
          size="medium"
        >
          Detayına Git
        </Button>
      </CardContent>
    </Card>
  );
}
