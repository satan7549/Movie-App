import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
