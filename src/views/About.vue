<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import request from '@/api/api';

@Component
export default class About extends Vue {
  created(): void {
    this.listPokemons();
  }

  get axiosParams(): URLSearchParams {
    const params = new URLSearchParams();
    params.append('limit', '25');
    params.append('offset', (25 * 1).toString());
    return params;
  }

  async listPokemons(): Promise<void> {
    try {
      const response = await request.getParams('/pokemon', this.axiosParams);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
