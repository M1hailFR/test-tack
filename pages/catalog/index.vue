<template>
  <div class="container h-full">
    <VVerticalPadding
      :desktop-padding="CATALOG_CONFIG.desktopPadding"
      :mobile-padding="CATALOG_CONFIG.mobilePadding"
    >
      <h2 class="text-2xl font-bold">{{ fields.title }}</h2>
      <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-[31px] w-full">
        <VProductsCard
          v-for="(product, idx) in products"
          :key="idx"
          :data="product"
        />
      </div>
    </VVerticalPadding>
  </div>
</template>

<script setup>
import { VProductsCard } from '~/components/blocks'
import { VVerticalPadding } from '~/components/ui'
import { apiPath } from '~/core/utils'
import { CATALOG_CONFIG } from '~/configs/pages/catalog'

const fields = CATALOG_CONFIG.block_fields

const { products } = await $fetch(apiPath.products, {
  query: {
    count: 24,
  },
})
</script>

<style lang="scss" scoped></style>
