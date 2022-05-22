import geo from '@/api/geo.api'
// import categories from '@/api/categories.api'

// import { BaseUrl } from '@/types/categories'

// const BASE_URL: BaseUrl = import.meta.env.DEV ? BaseUrl.Dev : BaseUrl.Prod

// export default (app: any) => ({
//   geo: geo(),
//   categories: categories(app, BASE_URL)
// })
export default () => ({
  geo: geo()
  // categories: categories(app, BASE_URL)
})
