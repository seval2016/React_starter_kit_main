import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import Product from "./Product";
import { CircularProgress, Box } from "@mui/material";
import Grid from "@mui/material/Grid";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products} = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid
          key={product.id}
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
        >
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
