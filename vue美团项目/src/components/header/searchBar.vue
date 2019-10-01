<template>
  <div class="search-bar">
    <el-row>
      <el-col :span="5" class="left">
        <router-link to="/">
          <img src="https://s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt />
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input
            placeholder="请输入内容"
            v-model="searchWord"
            @input="input($event)"
            @focus="focus($event)"
            @blur="blur($event)"
          ></el-input>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,index) in hotPlaceList" :key="index">
              <router-link to="/goodList">{{ item }}</router-link>
            </dd>
          </dl>
          <dl class="seachList" v-if="isSearchList">
            <dd v-for="(item,index) in seachPlaceList" :key="index">
              <router-link to="/goodList">{{ item }}</router-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <router-link to="/goodList" v-for="(item,index) in suggestList" :key="index">{{ item }}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchWord: "",
      isFocus: false,
      hotPlaceList: [
        "北京失恋博物展",
        "北京欢乐谷",
        "八达岭长城",
        "太平洋海底世界",
        "颐和园"
      ],
      suggestList:[
          "北京失恋博物展",
          "北京欢乐谷",
          "八达岭长城",
          "太平洋海底",
          "世界博览馆",
          "颐和园",
          "北京奇葩减压馆",
      ],
      seachPlaceList: []
    };
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.searchWord;
    },
    isSearchList() {
      return this.isFocus && this.searchWord;
    }
  },
  methods: {
    focus(e) {
      this.isFocus = true;
    },
    blur(e) {
      this.isFocus = false;
    },
    input(e) {
      // 这里e不是时间对象?
      // 这里应该增加防抖，但为了节约时间就不添加了
      var self = this;
      // http://api.duyiedu.com/
      this.$axios
        .get(
          "api/meituan/header/search.json?appkey=wangze_1568794075952&data=米饭"
        )
        .then(function(res) {
          self.seachPlaceList = res.data.data.list;
          console.log(res)
        });
    }
  }
};
</script>