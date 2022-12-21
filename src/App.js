import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AuthContextProvaider from "./Contexts/authContext";
import ProductsContextProvider from "./Contexts/productsContext";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <AuthContextProvaider>
      <ProductsContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductsContextProvider>
    </AuthContextProvaider>
  );
};

export default App;
