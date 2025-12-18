import React from "react";
import Container from "@mui/material/Container";

const PageContainer = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {children}
    </Container>
  );
};

export default PageContainer;
