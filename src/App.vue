<script setup lang="ts">
import {ref} from 'vue';
import VueJsonPretty from 'vue-json-pretty';

import rangr from '@/lib/rangr';

type methods = | 'GET' | 'POST' | 'PUT' | 'DELETE'

const method = ref<methods>('GET')
const url = ref<string>('');

const data = ref<any>();

const isProcessing = ref<boolean>(false);

const handleSubmit = async () => {
  isProcessing.value = true;
  try {
    const response = await rangr(url.value, method.value);

    data.value = response.data;
  } finally {
    isProcessing.value = false;
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="handleSubmit">
      <div class="apiURL__wrapper--container">
        <div class="apiURL__wrapper">
          <label>
            <input type="url" class="apiURL__input" v-model="url"/>
          </label>
        </div>
        <button class="apiURL__button" :disabled="isProcessing">
          <span v-if="isProcessing">Processing...</span>
          <span v-else>Send</span>
        </button>
      </div>
      <section class="apiURL__responseWrapper">
        <h2>Response</h2>
        <div class="apiURL__responseContainer">
          <vue-json-pretty :data="data" v-if="data" :deep="3" :showLength="true" :showIcon="true"/>
        </div>
      </section>
    </form>
  </main>
</template>
