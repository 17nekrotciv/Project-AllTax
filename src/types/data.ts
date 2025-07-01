export interface Brand {
  brandName: string
  salesData: number[]
}

export interface Product {
  productName: string
  brands: Brand[]
}

export interface Category {
  categoryName: string
  products: Product[]
}
