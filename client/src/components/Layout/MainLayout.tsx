import { Box } from "@mui/material";
import Header from "components/Header";
import Chart from "page/Chart";

const MainLayout = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Box sx={{ display: "flex", height: 60 }}>
        <Header />
      </Box>
      <Box sx={{ height: "calc(100% - 60px)" }}>
        <Chart />
      </Box>
    </Box>
  );
};

export default MainLayout;
