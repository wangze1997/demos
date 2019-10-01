<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-delete-location" />
            北京
            <router-link class="changeCity" :to="{name: 'changeCity'}">
                切换城市
            </router-link>
            [
                <a href="#" class="city-guess">门头沟区</a>
                <a href="#" class="city-guess">大厂回族自治县</a>
                <a href="#" class="city-guess">廊坊</a>
            ]
        </div>
        <div class="m-user">
            <router-link class="login" to="{name:'login'}">
                立即登入
            </router-link>
            <router-link class="register" to="{name:'register'}">
                注册
            </router-link>
        </div>
    </div>
</template>

, 