<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view/>
      </a-layout-content>
      <a-layout-footer class = "footer">
        <a href="https://github.com/VVX94" target="_blank" style="color: gray ;text-decoration: none;" >
          the Past 图库 by VVX94
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>


<script setup lang="ts">
import GlobalHeader from '@/components/GlobalHeader.vue'

</script>


<style scoped>
#basicLayout {
  .header{
    padding-inline: 20px;
    margin-bottom: 16px;
    color: unset;
    background: white;
  }
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: #efefef;
  }
  .content {
    width: 100%;
    margin-bottom: 30px;
    padding: 25px;
  }
}
</style>