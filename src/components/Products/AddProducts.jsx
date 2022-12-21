import { Grid, TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../Contexts/productsContext";
const AddProducts = () => {
  const { addProducts } = useProducts();
  const [product, setProduct] = useState({
    name: "",
    catigory: "",
    price: "",
    details: "",
    image: "",
  });
  console.log(product);
  return (
    <Grid sx={{ display: "flex", justifyContent: "center" }} item md={9}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "9px",
          marginTop: "50px",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={product.name}
          onChange={(e) =>
            setProduct({
              ...product,
              name: e.target.value,
            })
          }
        />

        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={product.price}
          onChange={(e) =>
            setProduct({
              ...product,
              price: e.target.value,
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Catigory"
          variant="outlined"
          value={product.catigory}
          onChange={(e) =>
            setProduct({
              ...product,
              catigory: e.target.value,
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Details"
          variant="outlined"
          value={product.details}
          onChange={(e) =>
            setProduct({
              ...product,
              details: e.target.value,
            })
          }
        />
        <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          value={product.image}
          onChange={(e) =>
            setProduct({
              ...product,
              image: e.target.value,
            })
          }
        />
        <Button onClick={() => addProducts(product)} variant="contained">
          Add
        </Button>
      </Box>
    </Grid>
  );
};

export default AddProducts;
