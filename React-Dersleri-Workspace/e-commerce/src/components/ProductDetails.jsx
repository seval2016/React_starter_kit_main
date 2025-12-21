import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedProduct,
  getProductById,
} from "../redux/slices/productSlice";

import {
  Container,
  Typography,
  Box,
  Chip,
  Rating,
  Button,
  Divider,
  IconButton,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { addToBasket } from "../redux/slices/basketSlice";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, selectedProduct } = useSelector(
    (state) => state.product
  );

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const addBasket = () => {
    const payload = {
      id: Number(id),
      price: selectedProduct.price,
      image: selectedProduct.image,
      title: selectedProduct.title,
      category: selectedProduct.category,
      rating: selectedProduct.rating,
      description: selectedProduct.description,
      quantity: count,
    };

    dispatch(addToBasket(payload));

    toast.success("Ürün sepete eklendi 🛒", {
      position: "top-right",
      autoClose: 2000,
    });

    setCount(1);
  };

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (product) => product.id === Number(id)
      );

      if (foundProduct) {
        dispatch(setSelectedProduct(foundProduct));
        return;
      }
    }

    dispatch(getProductById(id));
  }, [products, id, dispatch]);

  if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6">Ürün bulunamadı</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            p: 2,
            bgcolor: "#fff",
            borderRadius: 3,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Box
            component="img"
            src={selectedProduct.image}
            alt={selectedProduct.title}
            sx={{ maxWidth: 400, objectFit: "contain" }}
          />
        </Box>

        {/* INFO */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight="700" mb={2}>
            {selectedProduct.title}
          </Typography>

          <Chip label={selectedProduct.category} sx={{ mb: 2 }} />

          {selectedProduct.rating && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rating
                value={selectedProduct.rating.rate}
                readOnly
                precision={0.5}
                size="small"
              />
              <Typography sx={{ ml: 1 }}>
                ({selectedProduct.rating.count})
              </Typography>
            </Box>
          )}

          <Typography variant="h3" color="primary" mb={2}>
            ${selectedProduct.price}
          </Typography>

          <Typography color="text.secondary" mb={3}>
            {selectedProduct.description}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {/* QUANTITY */}
          <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
            <IconButton onClick={decrement}>
              <RemoveIcon />
            </IconButton>

            <Typography sx={{ mx: 2, fontWeight: "bold" }}>
              {count}
            </Typography>

            <IconButton onClick={increment}>
              <AddIcon />
            </IconButton>
          </Box>

          {/* BUTTONS */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              onClick={addBasket}
              sx={{ flex: 1 }}
            >
              Sepete Ekle
            </Button>

            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{ flex: 1 }}
            >
              Geri Dön
            </Button>

            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
