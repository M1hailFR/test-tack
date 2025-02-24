<template>
  <div class="container flex items-center justify-center h-[calc(100dvh-92px)] text-center relative">
    <div>
      <div class="mb-4 font-bold text-3xl flex items-center justify-center">
        {{ fields.title }}
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
    <p
      class="absolute block mx-auto w-max max-w-[300px] rounded-[12px] text-left text-sm top-2 left-0 text-gray-400 p-8"
      v-html="fields.info"
    />
  </div>
</template>

<script setup lang="ts">
import { VLink } from '~/components/ui'
import { MAIN_BANNER_CONFIG } from '~/configs/pages/index'

const fields = MAIN_BANNER_CONFIG.block_fields
</script>

<style lang="scss" scoped></style>
