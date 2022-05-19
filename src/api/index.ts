import categories from '@/api/categories.api'

export default (app: any) => ({
  categories: categories(app)
})
