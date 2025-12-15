import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Divider
} from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import axios  from 'axios';

let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_9FoOsIoQ9zObJKTQZ0TZWSjDr0Ue5z1ngvtALN33";




const currencies = [
  { code: "TRY", label: "Türk Lirası" },
  { code: "USD", label: "Amerikan Doları" },
  { code: "EUR", label: "Euro" },
  { code: "GBP", label: "Sterlin" }
];

function Currency() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("TRY");
  const [result, setResult] = useState(null);


  const handleConvert = async () => {
  if (!amount) return;

  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${from}`
    );

    const rate = response.data.data[to];
    const converted = amount * rate;

    setResult(converted.toFixed(2));
  } catch (error) {
    console.error("Çevirme hatası", error);
  }
};


  const handleSwap = () => {
    setFrom(to);
    setTo(from);
    setResult(null);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 4,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)"
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" fontWeight={600} mb={1}>
            Currency Converter
          </Typography>

          <Typography variant="body2" color="text.secondary" mb={3}>
            Anlık kur mantığı ile para birimi çevir
          </Typography>

          {/* Amount */}
          <TextField
            fullWidth
            label="Miktar"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mb: 3 }}
          />

          {/* From */}
          <TextField
            fullWidth
            select
            label="Kaynak Para Birimi"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            sx={{ mb: 2 }}
          >
            {currencies.map((c) => (
              <MenuItem key={c.code} value={c.code}>
                {c.code} — {c.label}
              </MenuItem>
            ))}
          </TextField>

          {/* Swap */}
          <Box textAlign="center" my={1}>
            <Button onClick={handleSwap}>
              <SwapHorizIcon />
            </Button>
          </Box>

          {/* To */}
          <TextField
            fullWidth
            select
            label="Hedef Para Birimi"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            sx={{ mb: 3 }}
          >
            {currencies.map((c) => (
              <MenuItem key={c.code} value={c.code}>
                {c.code} — {c.label}
              </MenuItem>
            ))}
          </TextField>

          <Button
            fullWidth
            size="large"
            variant="contained"
            onClick={handleConvert}
            sx={{
              py: 1.4,
              fontWeight: 600,
              borderRadius: 2
            }}
          >
            ÇEVİR
          </Button>

          {result && (
            <>
              <Divider sx={{ my: 3 }} />

              <Typography
                textAlign="center"
                fontSize={18}
                fontWeight={600}
              >
                {amount} {from} =
              </Typography>

              <Typography
                textAlign="center"
                fontSize={28}
                fontWeight={700}
                color="primary"
              >
                {result} {to}
              </Typography>
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}

export default Currency;
