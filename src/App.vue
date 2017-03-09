<template>
  <div class="app">
    <v-header :seller="seller"></v-header>
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
const ERRNO = 0;
export default {
  data() {
    return {
      seller : {}
    }
  },
  created() {
    this.$http.get('/api/seller').then(response => {
      response = response.body;
      if(response.errno === ERRNO) {
        this.seller = response.data;
        console.log(this.seller.avatar);
      }
    });
  },
  name: 'app',
  components: {
      'v-header': header
    }
}
</script>

<style lang="scss">
  @import "./common/scss/index.scss";

  .app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .tab-item {
        flex: 1;
        text-align: center;
      }
      .tab-item a {
        display: block;
      }
      .tab-item .active {
        color: #f01414;
      }
    }
  }
</style>
