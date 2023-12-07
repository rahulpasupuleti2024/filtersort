import React, { useState } from "react";
import "./style.css";

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState(null);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleCategoryFilterChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredAndSortedProducts = () => {
    let filteredProducts = [...products];

    if (categoryFilter) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === categoryFilter
      );
    }

    if (sortBy === "newPrice") {
      filteredProducts.sort((a, b) => a.newPrice - b.newPrice);
    } else {
      filteredProducts.sort((a, b) => b.newPrice - a.newPrice);
    }

    return filteredProducts;
  };

  return (
    <div>
      <div className="btn">
        <div>
          <label>
            Sort by Price:
            <select onChange={handleSortChange}>
              <option value="">High to Low</option>
              <option value="newPrice">Low to High</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            Filter by Category:
            <select onChange={handleCategoryFilterChange}>
              <option value="">All</option>
              <option value="sneakers">sneakers</option>
              <option value="flats">flats</option>
              <option value="heels">heels</option>{" "}
              <option value="sandals">sandals</option>
            </select>
          </label>
        </div>
      </div>

      <div>
        <h2>Product List</h2>
        <div className="items-container">
          {filteredAndSortedProducts().map((product) => (
            <div className="card">
              <img src={product.img} />
              <div className="content">
                <p>{product.title}</p>
                <p>{product.category}</p>
                <p>{product.newPrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
