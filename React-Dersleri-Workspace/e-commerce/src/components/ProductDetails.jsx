import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct, getProductById } from "../redux/slices/productSlice";

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

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find(
        (product) => product.id === Number(id)
      );
      if (foundProduct) {
        dispatch(setSelectedProduct(foundProduct));
      }
    } else {
      dispatch(getProductById(id));
    }
  }, [products, id, dispatch]);


  if (!selectedProduct || Object.keys(selectedProduct).length === 0) {
    return (
      <Container maxWidth="lg" sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6">Ürün bulunamadı</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 8 },
          alignItems: 'flex-start'
        }}
      >

        {/* IMAGE SECTION - LEFT */}
        <Box
          sx={{
            flex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: '#fff',
            p: 2,
            borderRadius: 4,
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}
        >
          <Box
            component="img"
            src={selectedProduct.image}
            alt={selectedProduct.title}
            sx={{
              width: "100%",
              maxWidth: 400,
              maxHeight: 500,
              objectFit: "contain",
            }}
          />
        </Box>

        {/* INFO SECTION - RIGHT */}
        <Box sx={{ flex: 1, width: '100%' }}>
          <Typography
            variant="h4"
            fontWeight="700"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.25rem' },
              lineHeight: 1.2,
              mb: 2
            }}
          >
            {selectedProduct.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 3, flexWrap: "wrap", gap: 1 }}>
            <Chip
              label={selectedProduct.category}
              sx={{ fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem' }}
            />
            {selectedProduct.rating && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating
                  value={selectedProduct.rating.rate}
                  precision={0.5}
                  readOnly
                  size="small"
                />
                <Typography variant="body2" sx={{ ml: 0.5, color: 'text.secondary' }}>
                  ({selectedProduct.rating.count} değerlendirme)
                </Typography>
              </Box>
            )}
          </Box>

          <Typography
            variant="h3"
            color="primary"
            fontWeight="bold"
            sx={{ mb: 3, fontSize: { xs: '2rem', md: '2.5rem' } }}
          >
            ${selectedProduct.price}
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            {selectedProduct.description}
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
            <Typography variant="h6" fontWeight="500" sx={{ fontSize: '1.1rem' }}>Adet:</Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                px: 1,
                py: 0.5
              }}
            >
              <IconButton
                onClick={decrement}
                size="small"
                sx={{ color: 'text.secondary' }}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography
                variant="h6"
                sx={{
                  mx: 2,
                  fontWeight: 'bold',
                  minWidth: 24,
                  textAlign: 'center'
                }}
              >
                {count}
              </Typography>
              <IconButton
                onClick={increment}
                size="small"
                sx={{ color: 'text.secondary' }}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                flex: 1,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 2
              }}
            >
              Sepete Ekle
            </Button>
            <IconButton
              size="large"
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                color: 'text.secondary',
                width: { xs: '100%', sm: 'auto' } // Full width on mobile if needed, or just regular
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate(-1)}
              sx={{
                flex: 1,
                py: 1.5,
                fontSize: '1rem',
                textTransform: 'none',
                borderRadius: 2,
                borderColor: 'divider',
                color: 'text.primary'
              }}
            >
              Geri Dön
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
