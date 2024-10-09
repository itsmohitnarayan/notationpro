<script setup lang="ts">
useSeoMeta({
  title: 'Notation Pro - AI Powered Web app for your notes'
});
definePageMeta({
  middleware: 'auth'
});
</script>

<template>
  <div class="h-full px-4 pt-16">
    <SettingsContacts />
    <SettingsAppearence />
  </div>
</template>
