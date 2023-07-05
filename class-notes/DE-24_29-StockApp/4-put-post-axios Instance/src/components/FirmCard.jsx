import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { CardHeader } from "@mui/material";
import useStockCall from "../hooks/useStockCall";


// Firms den gelen verileri burda once karsilayip sonra kullaniyoruz ilgili yerde
export default function FirmCard({firm,handleOpen,setInfo}) {
    const {deleteStockData} = useStockCall()
  return (
    <Card
      sx={{
        p: 2,
        width: "300px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent> */}
      <CardHeader title={firm?.name} subheader={firm?.address} />
      <CardMedia
        component="img"
        sx={{ height: 130, objectFit: "contain" }}
        image={firm?.image}
        title={firm?.name}
        alt={firm?.name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Phone: {firm?.phone}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        {/* kaleme basinca handleOpen fonksiyonu calisiyor ve modal aciliyor ama tikladigimiz kartin bilgileri gelmiyor ki edit edeblelim.bunun icin;firm bilgisinde verilerimiz vardi bunu yapmak icin setInfoya veriyi vermemiz lazim.yani firmCard dan setInfoya(firmModal de) erisebilemm lazim.FirmModal ile FirmCard in ortak noktasi Firms.oraya setInfo yu tasimam lazim.Yine bir lifting state up yapacagiz */}
        <EditIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => {
            setInfo(firm); //! icona tıklanıldığında ınfo stateinin tıklanılan firmanın verileri ile dolması için statei burada güncelliyoruz.
            handleOpen(); //! icona tıklanıldığında modalın açılmasını sağlıyoruz.
          }}
        />
        <DeleteOutlineIcon
          sx={{ cursor: "pointer", "&:hover": { color: "red" } }}
          onClick={() => deleteStockData("firms", firm.id)}
        />
      </CardActions>
    </Card>
  );
}
