export type IdType = string | number

export interface IProduct {
  id: number
  image: string
  newPriceValue: number
  oldPriceValue?: number
  newPrice: string
  oldPrice?: string
  brand: string
  name: string
  description: string
  url: string
  sale?: string
  quantity?: number
}
