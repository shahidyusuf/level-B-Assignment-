import React from "react";
// import { Grid } from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";

// how Can cards render 4 in react material? 
const AppCard = ({ title, desc, id, image, price, category }) => {
  const navigate = useNavigate();
  return (
    <Grid id item xs={2}>
    
    <Card sx={{ maxWidth: 345, height: 400, width: 300 }}>
      <CardMedia
        sx={{ height: 140, objectFit: "cover" }}
        image={image}
        title={title}
        category={category}
      />
      

      <CardContent sx={{ height: 160 }}>
        <Typography gutterBottom variant="h5" component="div">
          {id}
        </Typography>
        
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>


        <Typography gutterBottom variant="h5" component="div">
          {price}
        </Typography>

      <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>


        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => navigate(`/products/${id}`)} size="small">
          Add
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
};
export default AppCard;
