import { faker } from '@faker-js/faker'
import { pathTo } from '~/core/utils'
import type { IProduct } from '~/core/types/product'

export const generateFakeProduct = (): IProduct => {
  const hasOldPrice = faker.datatype.boolean()
  const newPrice = faker.commerce.price({ min: 100, max: 100000 })
  const oldPrice = hasOldPrice ? Number(newPrice) * (1 + faker.number.float({ min: 0.1, max: 0.5 })) : undefined

  return {
    id: Date.now() + faker.number.int({ min: 10, max: 10000 }),
    image: faker.image.url(),
    newPriceValue: Number(newPrice),
    oldPriceValue: oldPrice ? Number(oldPrice) : undefined,
    newPrice: Math.round(Number(newPrice)) + ' ₽',
    oldPrice: oldPrice ? Math.round(oldPrice) + ' ₽' : undefined,
    brand: faker.company.name(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    url: pathTo.products + '/' + faker.number.int({ min: 10, max: 10000 }),
    sale: oldPrice ? '-' + faker.number.int({ min: 1, max: 50 }) + '%' : undefined,
  }
}

export const generateFakeProducts = (count: number = 10): IProduct[] => {
  return Array.from({ length: count }, () => generateFakeProduct())
}
