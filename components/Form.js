import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";

const Form = ({ data, onSubmit }) => {
  const labelSx = { marginTop: "10px" };
  const [inputs, setInputs] = useState(
    data
      ? {
          title: data.title,
          author: data.author,
          imageUrl: data.imageUrl,
          featured: data.featured,
          price: data.price,
        }
      : {
          title: "",
          author: "",
          imageUrl: "",
          featured: false,
          price: "",
        }
  );

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputs);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        margin: "auto",
        boxShadow: "10px 10px 20px #ccc",
        borderRadius: "10px",
      }}
    >
      <Typography
        color={"#cc5333"}
        fontWeight="bold"
        variant="h5"
        mt={1}
        padding={2}
        textAlign="center"
      >
        {data ? "Book Detail" : "Add Book"}
      </Typography>
      <Box padding={3} display="flex" flexDirection="column" width={"100%"}>
        <FormLabel sx={labelSx}>Title</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.title}
          name="title"
          margin="normal"
        />
        <FormLabel sx={labelSx}>Author</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.author}
          name="author"
          margin="normal"
        />
        <FormLabel sx={labelSx}>ImageUrl</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.imageUrl}
          name="imageUrl"
          margin="normal"
        />
        <FormLabel sx={labelSx}>Price</FormLabel>
        <TextField
          onChange={handleChange}
          value={inputs.price}
          name="price"
          margin="normal"
        />
        <FormLabel sx={labelSx}>Featured</FormLabel>
        <Checkbox
          onChange={(e) =>
            setInputs((prevState) => ({
              ...prevState,
              featured: e.target.checked,
            }))
          }
          checked={inputs.featured}
          name="featured"
          sx={{ marginRight: "auto" }}
        />
        <Button type="submit" variant="contained" sx={{ bgcolor: "#c83576" }}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default Form;
