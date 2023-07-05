import Typography from "@mui/material/Typography";
import KpiCards from "../components/KpiCards";
import Charts from "../components/Charts";
import { useEffect } from "react";
import useStockCall from "../hooks/useStockCall";

const Home = () => {
  const { getPurcSales } = useStockCall();
  useEffect(() => {
    getPurcSales();
  }, []); // eslint-disable-line
  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Dashboard
      </Typography>
      <KpiCards />
      <Charts />
    </div>
  );
};

export default Home;
