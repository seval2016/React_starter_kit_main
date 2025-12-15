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

let BASE_URL="https://api.freecurrencyapi.com/v1/latest";
let API_KEY="fca_live_9FoOsIoQ9zObJKTQZ0TZWSjDr0Ue5z1ngvtALN33";


const rates = {
  TRY: 1,
  USD: 32,
  EUR: 35,
  GBP: 41
};

const currencies = [
  { code: "TRY", label: "Türk Lirası" },
  { code: "USD", label: "Amerikan Doları" },
  { code: "EUR", label: "Euro" },
  { code: "GBP", label: "Sterlin" }
];

function Currency() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("TRY");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(null);

  const handleConvert = () => {
    if (!amount) return;

    const converted =
      (amount * rates[from]) / rates[to];

    setResult(converted.toFixed(2));
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
