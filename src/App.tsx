import React, { useState, useEffect } from "react"
import "./App.css"
import type { Brand, Category, Product } from "./types/data"
import Header from "./components/header"
import Filters from "./components/filters"
import SalesReport from "./components/reports"
import mockData from "./data/mockData.json"

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Clothes")
  const [selectedProduct, setSelectedProduct] = useState<string>("Jeans")
  const [selectedBrand, setSelectedBrand] = useState<string>("Jeans X")

  const [productOptions, setProductOptions] = useState<Product[]>([])
  const [brandOptions, setBrandOptions] = useState<Brand[]>([])
  const [chartData, setChartData] = useState<number[]>([])

  const typedMockData: Category[] = mockData

  useEffect(() => {
    if (selectedCategory) {
      const category = typedMockData.find(
        (c) => c.categoryName === selectedCategory
      )
      setProductOptions(category ? category.products : [])
      setSelectedProduct("")
      setSelectedBrand("")
    } else {
      setProductOptions([])
    }
  }, [selectedCategory, typedMockData])

  useEffect(() => {
    if (selectedProduct) {
      const product = productOptions.find(
        (p) => p.productName === selectedProduct
      )
      setBrandOptions(product ? product.brands : [])
      setSelectedBrand("")
    } else {
      setBrandOptions([])
    }
  }, [selectedProduct, productOptions])

  useEffect(() => {
    if (selectedBrand) {
      const brand = brandOptions.find((b) => b.brandName === selectedBrand)
      setChartData(brand ? brand.salesData : [])
    } else {
      setChartData([])
    }
  }, [selectedBrand, brandOptions])

  useEffect(() => {
    const initialCategory = typedMockData.find(
      (c) => c.categoryName === "Clothes"
    )
    if (initialCategory) {
      setProductOptions(initialCategory.products)
      const initialProduct = initialCategory.products.find(
        (p) => p.productName === "Jeans"
      )
      if (initialProduct) {
        setBrandOptions(initialProduct.brands)
        const initialBrand = initialProduct.brands.find(
          (b) => b.brandName === "Jeans X"
        )
        if (initialBrand) {
          setChartData(initialBrand.salesData)
        }
      }
    }
  }, [typedMockData])

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Filters
          data={typedMockData}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          productOptions={productOptions}
          brandOptions={brandOptions}
        />
        <SalesReport salesData={chartData} />
      </main>
    </div>
  )
}

export default App
