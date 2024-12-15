<template>
    <div>
      <label for="language">{{ $t('language') }}:</label>
      <select id="language" v-model="selectedLanguage" @change="changeLanguage">
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="pt">Português</option>
      </select>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { useI18n } from 'vue-i18n';
  
  export default defineComponent({
    name: 'LanguageSelector',
    setup() {
      const { locale } = useI18n();
      const selectedLanguage = ref(locale.value);
  
      const changeLanguage = () => {
        locale.value = selectedLanguage.value;
      };
  
      return {
        selectedLanguage,
        changeLanguage,
      };
    },
  });
  </script>
  
  <style scoped>
  label {
    margin-right: 10px;
  }
  select {
    padding: 5px;
  }
  </style>