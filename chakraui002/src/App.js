import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import Form from "./Components/Form";
import Layout from "./Components/Layout";
import BasicPortals from "./Components/BasicPortals";
import Modals from "./Components/Modals";
import StackExample from "./Components/StackExample";
import FlexExample from "./Components/FlexExample";
import Navbar from "./Components/Navbar";
import GridExample from "./Components/GridExample";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <Navbar></Navbar> */}
        {/* <Form></Form> */}
        {/* <Layout></Layout> */}
        {/* <BasicPortals></BasicPortals> */}
        {/* <Modals></Modals> */}
        {/* <StackExample></StackExample> */}
        {/* <FlexExample></FlexExample> */}
        <GridExample></GridExample>
      </div>
    </ChakraProvider>
  );
}
