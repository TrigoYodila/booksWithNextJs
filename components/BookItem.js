import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Link from "next/link";

const BookItem = ({ book }) => {

  return (
    <Card
      sx={{
        width: "100%",
        heigth: "100%",
        borderRadius: 3,
        boxShadow: "5px 5px 10px #ccc",
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      <div style={{ width: "100%", height: "50%", position: "relative" }}>
        {book.featured && (
          <div
            style={{
              position: "absolute",
              top: "0",
              background: "#c83576",
              width: "75px",
              padding: "2px",
              color: "white",
            }}
          >
            Featured
          </div>
        )}
        <img
          src={book.imageUrl}
          alt={book.title}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <CardContent width={"100%"} height={"30%"}>
        <Typography gutterBottom variant="h5" component="div">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {book.author}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/books/${book._id}`}>
          <Button size="small" color="warning">
            Edit
          </Button>
        </Link>
        <Button size="small" color="error">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BookItem;
