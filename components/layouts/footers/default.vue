<template>
  <footer
    class="footer"
    :class="[fields.theme, fields.type]"
  >
    <div class="container relative flex items-center gap-6 py-1 h-full">
      <div class="transition-transform duration-500">
        <VLink
          link="/"
          variant="primary"
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
          <slot name="footer-menu" />
        </div>

        <div class="flex-1 flex justify-center">
          <slot name="footer-cart" />
        </div>
      </div>
      <Icon
        name="material-symbols:person-rounded"
        class="text-[32px] text-white"
      />
      <div class="flex flex-col">
        <p class="text-[14px] block">Разработчик</p>
        <VLink
          :link="fields.developer?.link ?? ''"
          target="_target"
          class="block text-[14px]"
        >
          {{ fields.developer?.name }}
        </VLink>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type { IFooterDefaultProps } from './shared'
import type { IFieldsProps } from '~/core/types/components'

import { VLink } from '~/components/ui'

defineOptions({
  name: 'FooterDefault',
})

defineProps<IFieldsProps<IFooterDefaultProps>>()
</script>

<style lang="scss" scoped>
.footer {
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
  &.dark {
    background-color: rgb(0, 0, 0);
    color: white;
  }
}
</style>
