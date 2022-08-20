import type { Category } from '@/types/categories'
import type { Product } from '@/types/products'
import type { Notification } from '@/types/notifications'

export type DataBase = {
  categories: Category[]
  products: Product[]
  notifications: Notification[]
}
