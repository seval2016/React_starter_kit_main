import {
  Box,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

import { useSelector, useDispatch } from "react-redux";
import {
  removeFromBasket,
  decreaseQuantity,
  addToBasket,
} from "../redux/slices/basketSlice";

function Basket({ onClose }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.basket);

  const totalPrice = products.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Box
      sx={{
        width: { xs: "100vw", sm: 380 },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#f7f7f7",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          px: 2,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "#fff",
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Typography fontWeight={700} fontSize={18}>
          Sepetim
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 2,
          py: 2,
        }}
      >
        {products.length === 0 ? (
          /* EMPTY STATE */
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "text.secondary",
              textAlign: "center",
            }}
          >
            <ShoppingBagOutlinedIcon sx={{ fontSize: 72, mb: 2 }} />
            <Typography fontSize={16} fontWeight={600}>
              Sepetin boş
            </Typography>
            <Typography fontSize={14}>
              Beğendiğin ürünleri sepete ekleyebilirsin
            </Typography>
          </Box>
        ) : (
          /* PRODUCTS */
          <Stack spacing={2}>
            {products.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  gap: 2,
                  p: 2,
                  bgcolor: "#fff",
                  borderRadius: 2,
                  boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 64,
                    height: 64,
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />

                {/* CONTENT */}
                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0, // 🔥 taşmayı engeller
                    display: "flex",
                    flexDirection: "column",
                    gap: 0.5,
                  }}
                >
                  {/* TITLE */}
                  <Typography
                    fontWeight={600}
                    fontSize={14}
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 2, sm: 1 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* PRICE */}
                  <Typography fontSize={13} color="text.secondary">
                    ${item.price}
                  </Typography>

                  {/* QUANTITY */}
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 0.5,
                    }}
                  >
                    <IconButton
                      size="small"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>

                    <Typography
                      sx={{
                        mx: 1,
                        minWidth: 20,
                        textAlign: "center",
                        fontWeight: 500,
                      }}
                    >
                      {item.quantity}
                    </Typography>

                    <IconButton
                      size="small"
                      onClick={() =>
                        dispatch(addToBasket({ ...item, quantity: 1 }))
                      }
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>

                {/* DELETE */}
                <IconButton
                  size="small"
                  sx={{ alignSelf: "flex-start" }}
                  onClick={() => dispatch(removeFromBasket(item.id))}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            ))}
          </Stack>
        )}
      </Box>

      {/* FOOTER */}
      {products.length > 0 && (
        <Box
          sx={{
            p: 2,
            bgcolor: "#fff",
            borderTop: "1px solid #eaeaea",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
            }}
          >
            <Typography fontWeight={600}>Toplam</Typography>
            <Typography fontWeight={700}>${totalPrice.toFixed(2)}</Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            size="large"
            sx={{
              borderRadius: 2,
              py: 1.2,
              fontWeight: 600,
              textTransform: "none",
            }}
          >
            Ödemeye Geç
          </Button>
        </Box>
      )}
    </Box>
  );
}

export default Basket;
