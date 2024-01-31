const SOURCE_CODE_MAP: Record<string, string> = {
  'anshmehra': 'ANSHFANS'
}

export default defineNuxtRouteMiddleware((to, from) => {
  const store = useStore()
  const route = useRoute()

  if (route.query.affiliate_code) {
    store.context.coupon = route.query.affiliate_code as string
  } else if (route.query.utm_source) {
    store.context.coupon = SOURCE_CODE_MAP[route.query.utm_source as string]
  }
})
