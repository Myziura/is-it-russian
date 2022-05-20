import categories from '@/api/categories.api'

import { BaseUrl } from '@/types/categories'

const BASE_URL: BaseUrl = import.meta.env.DEV ? BaseUrl.Dev : BaseUrl.Prod

export default (app: any) => ({
  categories: categories(app, BASE_URL)
})
