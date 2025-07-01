import React from "react"
import type { Category, Product, Brand } from "../types/data"

interface FiltersProps {
  data: Category[]
  selectedCategory: string
  setSelectedCategory: (value: string) => void
  selectedProduct: string
  setSelectedProduct: (value: string) => void
  selectedBrand: string
  setSelectedBrand: (value: string) => void
  productOptions: Product[]
  brandOptions: Brand[]
}

const Filters: React.FC<FiltersProps> = ({
  data,
  selectedCategory,
  setSelectedCategory,
  selectedProduct,
  setSelectedProduct,
  selectedBrand,
  setSelectedBrand,
  productOptions,
  brandOptions,
}) => {
  return (
    <div className="filters-container">
      <div className="filter-item">
        <label htmlFor="category-select">Category:</label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Select a Category</option>
          {data.map((cat) => (
            <option key={cat.categoryName} value={cat.categoryName}>
              {cat.categoryName}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="product-select">Product:</label>
        <select
          id="product-select"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          disabled={!selectedCategory}
        >
          <option value="">Select a Product</option>
          {productOptions.map((prod) => (
            <option key={prod.productName} value={prod.productName}>
              {prod.productName}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label htmlFor="brand-select">Brand:</label>
        <select
          id="brand-select"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          disabled={!selectedProduct}
        >
          <option value="">Select a Brand</option>
          {brandOptions.map((brand) => (
            <option key={brand.brandName} value={brand.brandName}>
              {brand.brandName}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
