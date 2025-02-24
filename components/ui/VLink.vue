<template>
  <nuxt-link
    v-if="link"
    :to="link"
    :class="linkClass"
    :external="isExternalUrl(link)"
    :target="target"
  >
    <slot />
  </nuxt-link>
  <span
    v-else
    :class="linkClass"
  >
    <slot />
  </span>
</template>

<script setup lang="ts">
import { isExternalUrl } from '~/core/utils'
import {
  type LinkTargetType,
  type ElementVariantsTypes,
  LinkTargetEnum,
  ElementVariantsEnum,
} from '~/core/types/components'

defineOptions({
  name: 'VLink',
})

interface ILinkProps {
  link: string
  target?: LinkTargetType
  variant?: ElementVariantsTypes
}

const props = withDefaults(defineProps<ILinkProps>(), {
  target: LinkTargetEnum.SELF,
  variant: ElementVariantsEnum.PRIMARY,
})

const linkClass = computed(() => {
  return ['v-link', `v-link-${props.variant}`]
})
</script>

<style lang="scss" scoped>
.v-link {
  &-primary {
    display: inline-block;
  }
  &-secondary {
    display: inline-block;
    background-color: rgb(0, 0, 0);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
  }
}
</style>
