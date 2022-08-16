<template>
<div class="container-fluid">
  <div class="row">
  </div>
</div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core';
import { AppState } from '../AppState.js';
import { datesService } from '../services/DatesService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup(){
    async function getDates(){
      try {
        await datesService.getDates()
      } catch (error) {
        logger.error('[Get Date]', error)
        Pop.error(error)
      }
    }
    onMounted(() => {
      getDates()
    })
  return {
    dates: computed(() => AppState.dates),
    getDates
  }
  }
}
</script>

<style scoped lang="scss">
body{
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    overflow-y: hidden;
    position: relative;
  }
</style>
