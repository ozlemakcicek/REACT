import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardMedia from "@mui/material/CardMedia";

import { CardHeader,  } from "@mui/material";



import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import useStockCall from "../hooks/useStockCall";


export default function BrandCard({brand,handleOpen,setInfo}) {

    const{deleteStockData}=useStockCall()
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={brand?.name} />

      <CardMedia
        component="img"
        sx={{ height: 170, objectFit: "contain" }}
        image={brand?.image}
        title={brand?.name}
        alt={brand?.name}
      />

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
     
        <EditIcon sx={{ cursor: "pointer", "&:hover": { color: "red" } }} onClick={()=>{
          setInfo(brand);
          handleOpen()
          }} />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={()=>deleteStockData("brands",brand.id)}
        />
      </CardActions>
    </Card>
  );
}
