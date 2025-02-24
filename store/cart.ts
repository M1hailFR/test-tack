import { defineStore } from 'pinia'
import { useNotificationStore } from './notification'
import type { IProduct } from '~/core/types/product'

export const useCartStore = defineStore('cart', () => {
  const notification = useNotificationStore()
  const items = ref<IProduct[]>([])

  onMounted(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      items.value = JSON.parse(saved)
    }
  })

  watch(items, (newItems) => {
    localStorage.setItem('cart', JSON.stringify(newItems))
  }, { deep: true })

  const totalItems = computed(() => items.value.length)

  const totalAmount = computed(() =>
    items.value.reduce((sum, item) => {
      return sum + item.newPriceValue * (item.quantity || 1)
    }, 0),
  )

  const cartItemsCount = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.quantity || 1), 0)
  })

  function addItem(product: IProduct) {
    const existingItem = items.value.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1
      notification.show({
        message: 'Количество товара увеличено',
        type: 'success',
      })
    } else {
      items.value.push({ ...product, quantity: 1 })
      notification.show({
        message: 'Товар добавлен в корзину',
        type: 'success',
      })
    }
  }

  function removeItem(productId: number) {
    const index = items.value.findIndex(item => item.id === productId)
    if (index > -1) {
      items.value.splice(index, 1)
      notification.show({
        message: 'Товар удален из корзины',
        type: 'success',
      })
    }
  }

  function updateQuantity(productId: number, quantity: number) {
    const item = items.value.find(item => item.id === productId)
    if (item && quantity > 0) {
      item.quantity = quantity
      notification.show({
        message: 'Количество товара изменено',
        type: 'success',
      })
    }
  }

  function clearCart() {
    items.value = []
    notification.show({
      message: 'Корзина очищена',
      type: 'success',
    })
  }

  return {
    items,
    totalItems,
    totalAmount,
    cartItemsCount,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
})
