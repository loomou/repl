const e=`import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.mount('#root');`,t=`<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
<\/script>

<template>
  <h1 class="title">{{ msg }}</h1>
  <input v-model="msg" />
</template>

<style>
  .title {
    color: red;
  }
</style>
`,p=[{name:"main.ts",source:e,isActive:!1},{name:"App.vue",source:t,isActive:!0}];export{p as default};
