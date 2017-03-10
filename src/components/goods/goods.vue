<template>
    <div class="goods">
      <div class="menu-wrapper">
        <ul>
          <li v-for="item in goods" class="menu-item border-1px">
            <span class="text">
              <span class="icon" v-show="item.type>0" :class="classMap[item.type]"></span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper">
        <ul>
          <li v-for="item in goods" class="food-list">
            <h1 class="title"> {{item.name}} </h1>
            <ul>
              <li v-for="food in item.foods" class="food-item  border-1px">
                <div class="icon">
                  <img :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span>￥{{food.price}}</span>
                    <span v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
  export default{
    props: {
      seller: {
        type: Object
      }
    },
    data(){
      return{
        goods: []
      }
    },
    created(){
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      this.$http.get('/api/goods').then((response) => {
        response = response.body;
        if(response.errno == 0) {
          this.goods = response.data;
        }
      })
    }
  }
</script>
<style lang="scss">
   @import "../../common/scss/mixin.scss";

   .goods {
      display: flex;
      position: absolute;
      top: 174px;
      bottom: 46px;
      width: 100%;
      overflow: hidden;
      .menu-wrapper {
        flex: 0 0 80px;
        width: 80px;
        background: #f3f5f7;
        .menu-item {
          display: table;
          height: 54px;
          width: 56px;
          line-height: 14px;
          padding: 0 12px;
          .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            &.decrease {
              @include bg-image('decrease_3')
            }
            &.discount {
              @include bg-image('discount_3')
            }
            &.special {
              @include bg-image('special_3')
            }
            &.invoice {
              @include bg-image('invoice_3')
            }
            &.guarantee {
              @include bg-image('guarantee_3')
            }
          }
          .text {
            display: table-cell;
            width: 56px;
            vertical-align: middle;
            font-size: 12px;
            @include border-1px('rgba(7,17,27,0.1)');
          }
        }
      }
      .foods-wrapper {
        flex: 1;
        .title{
          padding-left: 14px;
          height:　26px;
          line-height: 26px;
          border-left: 2px solid #d9dde1;
          font-size: 12px;
          color: rgb(147, 153, 159);
          background: #f3f5f7;
        }
        .food-item {
          display: flex;
          margin: 18px;
          padding-bottom: 18px;
          @include border-1px('rgba(7,17,27,0.1)');
          &:last-child {
            @include border-none();
            margin-bottom: 0;
          }
          .icon {
            flex: 0 0 57px;
            img{
              width: 57px;
              height: 57px;
              margin-right: 10px;
            }
          }
          .content {
            flex: 1;
            .name {
              margin: 2px 0 8px 0;
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              color: rgb(7,17,27);
            }
          }
        }
      }
   }
</style>
