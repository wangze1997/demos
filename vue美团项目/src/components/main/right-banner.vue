<template>
  <div class="right-banner">
    <div class="home-header-links">
      <a href="http://waimai.meituan.com" title="美团外卖" target="_blank" class="active">美团外卖</a>
      <a href="http://maoyan.com" title="猫眼电影" target="_blank">猫眼电影</a>
      <a href="http://hotel.meituan.com" title="美团酒店" target="_blank">美团酒店</a>
      <a
        href="http://phoenix.meituan.com/?phx_wake_up_type=mtpc_category&amp;phx_wake_up_source=nav_bar"
        title="民宿／公寓"
        target="_blank"
        class="active"
      >民宿／公寓</a>
      <a
        href="https://ecom.meituan.com/bizsettle/settle/merchantsSettle?utm_source=mtxz"
        title="商家入驻"
        target="_blank"
        class="active"
      >商家入驻</a>
      <a href="//gongyi.meituan.com/" title="美团公益" target="_blank">美团公益</a>
    </div>
    <div class="banner-row clearfix">
      <div class="item banner-slider shadow">
        <div class="slider" id="banner-slider">
          <template>
            <div class="block">
              <el-carousel trigger="click" height="240px">
                <el-carousel-item v-for="(item, index) in Imgs" :key="index">
                  <img :src="item" alt="" height="240px" width="550px">
                </el-carousel-item>
              </el-carousel>
            </div>
          </template>
        </div>
      </div>
      <a href="/xiuxianyule/" target="_blank" class='pic-1'>
        <div
          class="item shadow"
          style="background-image:url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg"
        ></div>
      </a>
      <div class="item banner-logincard">
        <div style="float:left">
          <div class="login-container">
            <div class="default" style="display:block">
              <div class="head-img-row">
                <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
              </div>
              <p class="user-name">Hi！你好</p>
              <router-link to="{name:'register'}">登入</router-link>
              <router-link to="{name:'login'}">注册</router-link>
            </div>
            <!-- <div class="default" style="display:none">
              <div class="setting">
                <a href="https://www.meituan.com/account/settings" target="_blank">
                  <div class="icon">
                    <i class="iconfont icon-setting_iconx"></i>
                  </div>
                </a>
              </div>
              <div class="head-img-row">
                <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                  <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
                </a>
              </div>
              <div class="nickname-row">
                <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                  <p class="user-name">你好</p>
                </a>
                <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                  <i class="iconfont iconfont_level icon-lable_level_undefined"></i>
                </a>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="https://www.meituan.com/orders/ " target="_blank">
                    <div class="icon">
                      <i class="iconfont icon-order_iconx"></i>
                    </div>
                    <p class="fn-name">我的订单</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="https://www.meituan.com/collections/" target="_blank">
                    <div class="icon">
                      <i class="iconfont icon-collection_iconx"></i>
                    </div>
                    <p class="fn-name">我的收藏</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="https://www.meituan.com/vouchers/" target="_blank">
                    <div class="icon">
                      <i class="iconfont icon-ticket_iconx"></i>
                    </div>
                    <p class="fn-name">抵用券</p>
                  </a>
                </div>
              </div>
              <div class="fn-row clearfix">
                <div class="fn-item">
                  <a href="https://www.meituan.com/account/userinfo" target="_blank">
                    <div class="icon">
                      <i class="iconfont icon-money_iconx"></i>
                    </div>
                    <p class="fn-name">余额</p>
                  </a>
                </div>
                <div class="fn-item">
                  <a href="https://www.meituan.com/account/userinfo/" target="_blank">
                    <div class="icon">
                      <i class="iconfont icon-more_iconx"></i>
                    </div>
                    <p class="fn-name">更多</p>
                  </a>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="banner-row clearfix">
      <a href="http://hotel.meituan.com" class="link" target="_blank">
        <div
          class="item pic-2 shadow"
          style="background-image:url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png"
        ></div>
      </a>
      <a href="http://jiaoyupeixun/?utm_source=MTPCmain-4" class="link" target="_blank">
        <div
          class="item pic-3 shadow"
          style="background-image:url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg"
        ></div>
      </a>
      <a href="http://emis.meishi.meituan.com/merchantsSettled" class="link" target="_blank">
        <div
          class="item pic-4 shadow"
          style="background-image:url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg"
        ></div>
      </a>
      <div class="item download-app">
        <div class="qrcode-box">
          <img
            src="http://s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
        </div>
        <p class="app-name">美团APP手机版</p>
        <p class="sl">
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
      return {
        Imgs: [
          "http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg",
          "http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg",
          "http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg",
          "http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg",
          "https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png"
        ]
      }
    }
}
</script>