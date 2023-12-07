// App.js

import React from "react";
import ProductData from "./ProductData";
import ProductList from "./ProductList";

const App = () => {
  return (
    <div>
      <ProductList products={ProductData} />
    </div>
  );
};

export default App;
