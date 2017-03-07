<template>
  <div class="app">
    <v-header></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

import header from '@/components/header/header'

export default {
  name: 'app',
  components: {
      'v-header': header
    }
}

</script>

<style>
.tab {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.tab:after {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid rgba(7,17,27,0.1);
  content: ' ';
}

@media (-webkit-min-device-pixel-ratio: 1.5) {
  .border-1px::after {
    -webkit-transform: scaleY(0.7);
    transform: scaleY(0.7);
  }
}

@media (-webkit-min-device-pixel-ratio: 2) {
  .border-1px::after {
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }
}

.tab-item {
  flex: 1;
  text-align: center;
}

.tab-item a {
  display: block;
}
.tab-item .active{
  color: #f01414;
}
</style>
