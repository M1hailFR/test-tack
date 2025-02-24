<template>
  <div class="VProductsCard group">
    <div class="VProductsCard--block max-w-[201px]">
      <div class="flex items-center justify-center relative min-w-[201px] max-w-[201px] h-[201px] rounded-[12px]">
        <img
          :src="data.image || 'https://via.placeholder.com/150'"
          alt="product"
          class="w-full h-full object-cover rounded-[12px]"
        />
        <div
          v-if="data?.sale"
          class="absolute left-2 bottom-2 bg-white rounded-[4px] px-[6px] py-[2px] max-w-[40px] text-pink-400"
        >
          <p class="text-[12px] font-medium">{{ data.sale }}</p>
        </div>
      </div>
      <p class="text-[16px] font-bold mt-[12px]">
        {{ data.newPrice }} <span class="text-[12px] line-through text-gray-400">{{ data.oldPrice }}</span>
      </p>
      <p class="text-[14px] font-bold line-clamp-1">{{ data.name }}</p>
      <p class="text-[12px] font-semibold my-[3px] capitalize">{{ data.brand }}</p>
      <p class="text-[12px] line-clamp-2 mb-3">{{ data.description }}</p>
      <p class="text-[8px] mb-3">id: {{ data.id }}</p>
      <VButton
        size="small"
        class="bg-black text-white rounded-[8px] hidden group-hover:block"
        @click=" cartStore.addItem(data)"
      >
        В корзину
      </VButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VButton } from '~/components/ui'
import type { IProduct } from '~/core/types/product'
import { useCartStore } from '~/store/cart'

defineOptions({
  name: 'VProductsCard',
})

interface IProductsCardProps {
  data: IProduct
}

defineProps<IProductsCardProps>()

const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.VProductsCard {
  &--block {
    transition: background 0.2s linear;
    animation-delay: 2s;
    &:hover {
      z-index: 10;
      position: absolute;
      box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.10);
      cursor: pointer;
      padding: 24px;
      translate: -24px -24px;
      max-width: 249px;
      border-radius: 16px;
      background: white;
    }
  }
}
</style>
