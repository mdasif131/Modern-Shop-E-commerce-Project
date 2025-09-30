import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressTypes'
import { authorType } from './authorTypes'
import { blockContentTypes } from './blockContentTypes'
import { blogCategoryType } from './blogCategoryTypes'
import { blogType } from './blogType'
import { brandType } from './brandTypes'
import { productType } from './productTypes'
import { orderType } from './orderType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    addressType,
    authorType,
    blockContentTypes,
    blogCategoryType,
    blogType,
    brandType,
    productType,
    orderType,
  ],
}
