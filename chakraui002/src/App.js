import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./Components/Form";
import Layout from "./Components/Layout";
import BasicPortals from "./Components/BasicPortals";
import Modals from "./Components/Modals";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <Form></Form> */}
        {/* <Layout></Layout> */}
        {/* <BasicPortals></BasicPortals> */}
        <Modals></Modals>
      </div>
    </ChakraProvider>
  );
}
