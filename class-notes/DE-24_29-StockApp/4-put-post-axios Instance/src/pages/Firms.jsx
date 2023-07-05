// import {useDispatch, useSelector} from "react-redux";
// import { fetchFail, fetchStart, getSucces } from "../features/stockSlice";
// import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modal/FirmModal";

// import  FirmModal  from "../components/FirmModal";

const Firms = () => {
  // const dispatch = useDispatch();
  // const { token } = useSelector(state => state.auth);

  const { getStockData } = useStockCall();
  const { firms } = useSelector(state=> state.stock);

  //!Lifting state up
   const [open, setOpen] =useState(false);
   const handleOpen = () => setOpen(true);
  //  const handleClose = () => setOpen(false);
   const handleClose = () => {
    setOpen(false);
     setInfo({
       name: "",
       phone: "",
       image: "",
       address: "",
     });

  }

//! ikinci bir Lifting state up durumu.FirmModal den getirdik.firmCard da ulasmak icin firmModal ile FirmCard arasindaki ortak yapiya tasinmali.ve burdan dagitacagiz.asagida firmModale her ikisini de gonderecegiz(hem guncelliyorz hem de infonun kendini kullaniyorz) ve FirmCard a da sadce tamirciyi gondercgz(ilgili firmayi setinfoya aktaracak) ve oralarda da karsila kullan
   const [info, setInfo] = useState({
     name: "",
     phone: "",
     image: "",
     address: "",
   });

  //? firms verileri bana birden fazla yerde lazım olduğu için fonksiyonu burada değil de her yerden erişebileceğim bir noktada tanımlıyorum. İçerisinde react hookları lazım olduğu için de bu ortak nokta en iyi custom hook olmuş oluyor.
  // const getFirms = async () => {
  //   const BASE_URL = process.env.REACT_APP_BASE_URL;

  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     const url = "firms";
  //     dispatch(getSucces({ data, url }));
  //     // dispatch(getSucces({ data, url:"firms"}))
  //   } catch (error) {
  //     dispatch(fetchFail());
  //   }
  // };

  useEffect(() => {
    // getFirms();
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      {/*1- acma kapama statelerini bu sayfaya tasidiktan sonra artik onClick ile calistirablrz */}
      <Button variant="contained" onClick={handleOpen}>New Firm</Button>
      {/* firmModal alaninin burda acilmasini istedik.o yuzden burda cagiriyrz */}
      {/* 2- bu sayfaya tasidigimiz open v e handleClose u FirmModal a gondermeliyiz ve orda da karsilamaliyiz */}
      <FirmModal open={open} handleClose={handleClose} info={info} setInfo={setInfo} />
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
      {/* kaleme tiklayinca modal acilsin istiyoruz.modal acan fonksiyon handleOpen().kalem Card icinde.oraya gonderelim */}
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard firm={firm} handleOpen={handleOpen} setInfo={setInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firms;
