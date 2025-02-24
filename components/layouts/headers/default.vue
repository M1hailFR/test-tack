<template>
  <header
    class="header"
    :class="[fields.theme, fields.type]"
  >
    <div class="container relative flex items-center gap-6 py-1 h-full">
      <div class="transition-transform duration-500">
        <VLink
          link="/"
          target="_self"
        >
          <div class="inline-flex items-center gap-2">
            <Icon
              :name="fields.logo ?? ''"
              class="text-[32px] text-pink-600"
            />
            <h1 class="font-bold mb-0">{{ fields.text }}</h1>
          </div>
        </VLink>
      </div>

      <div class="hidden lg:flex items-center justify-between lg:flex-1 transition-transform duration-500">
        <div class="flex-1 flex justify-center">
          <slot name="header-menu" />
        </div>

        <div class="flex-1 flex justify-center">
          <slot name="header-cart" />
        </div>
      </div>
      <div>
        <VLink
          link="/cart"
          target="_self"
        >
          <div class="flex items-center gap-2 relative">
            <Icon
              name="material-symbols:shopping-basket-outline"
              class="block text-[32px] text-pink-600"
            />
            <div class="block text-[12px] font-semibold bg-black text-white rounded-full px-[12px] pt-1 py-[2px]">
              <span>Корзина</span>
              <span class="ml-2">{{ cartStore.totalItems }}</span>
            </div>
            <div class="block text-[12px] font-semibold bg-black text-white rounded-full px-[12px] pt-1 py-[2px]">
              <span class="">{{ cartStore.totalAmount.toFixed(2) }} ₽</span>
            </div>
          </div>
        </VLink>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { IHeaderDefaultProps } from './shared'
import type { IFieldsProps } from '~/core/types/components'
import { useCartStore } from '~/store/cart'
import { VLink } from '~/components/ui'

defineOptions({
  name: 'HeaderDefault',
})

defineProps<IFieldsProps<IHeaderDefaultProps>>()

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.header {
  top: 0;
  z-index: 50;
  width: 100%;
  filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07));
  padding: 0.5rem 0;
  transition: all;
  height: 92px;
  &.light {
    background-color: rgb(255, 255, 255);
    color: black;
  }
}
</style>
