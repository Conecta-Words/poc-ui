<template>
  <div>
    <h1>{{ $t('login') }}</h1>
    <LanguageSelector />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LanguageSelector from './components/LanguageSelector.vue';

export default defineComponent({
  name: 'App',
  components: {
    LanguageSelector,
  },
});
</script>