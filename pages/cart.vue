<template>
  <div class="container h-full">
    <VVerticalPadding
      :desktop-padding="CART_CONFIG.desktopPadding"
      :mobile-padding="CART_CONFIG.mobilePadding"
    >
      <h2
        v-if="cartStore.items.length"
        class="text-2xl font-bold"
      >
        {{ fields.title }}
      </h2>
      <div
        v-if="cartStore.items.length"
        class="flex gap-4"
      >
        <div class="w-[80%] shadow-card rounded-[12px]">
          <VProductsCardList
            v-for="item in cartStore.items"
            :key="item.id"
            :data="item"
          />
        </div>

        <div class="w-[20%] shadow-card p-4 rounded-[12px] flex flex-col gap-4 justify-between">
          <p>Итого: {{ cartStore.totalAmount.toFixed(2) }} ₽</p>
          <VButton size="small">Оформить заказ</VButton>
        </div>
      </div>
      <div
        v-else
        class="flex items-center justify-center text-center h-[calc(100dvh-92px)]"
      >
        <div>
          <div class="mb-4 font-bold text-3xl flex items-center justify-center">
            {{ fields.text }}
          </div>
          <VLink
            :link="fields.link"
            variant="secondary"
          >
            <div class="text-2xl flex items-center justify-center">
              <Icon
                :name="fields.icon"
                class="mr-4 text-[32px] text-white"
              />
              {{ fields.button }}
            </div>
          </VLink>
        </div>
      </div>
    </VVerticalPadding>
  </div>
</template>

<script setup lang="ts">
import { CART_CONFIG } from '~/configs/pages/cart'
import { useCartStore } from '~/store/cart'
import { VVerticalPadding, VButton, VLink } from '~/components/ui'
import { VProductsCardList } from '~/components/blocks'

const fields = CART_CONFIG.block_fields

const cartStore = useCartStore()
</script>

<style lang="scss" scoped></style>
