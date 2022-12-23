import React from "react";
import { Grid } from "@mui/material";
import BookItem from "./BookItem";

const BookList = ({ data }) => {

  return (
    <div>
      <Grid padding={1} spacing={2} container>
        {data.map((book) => (
          <Grid
            xs={6}
            sm={4}
            md={3}
            lg={2}
            width={"100%"}
            height={"500px"}
            item
            key={book._id}
          >
            <BookItem book={book} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookList;
