<template>
  <div class="op-area">
    按省份选择:
    <m-select data="省份" :disabled="true" />
    <m-select data="城市" :disabled="false" />
    <template>
      <el-select
        v-model="value"
        multiple
        filterable
        remote
        reserve-keyword
        placeholder="请输入关键词"
        :remote-method="remoteMethod"
        :loading="loading"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </template>
  </div>
</template>

    </div>
</template>

<script>
import mSelect from "./select.vue";
export default {
  components: {
    mSelect
  },

   data() {
      return {
        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["北京","保定","蚌埠","包头","巴彦淖尔","本溪","白山","白城","亳州","滨州","北海","百色","巴中","毕节","保山","宝鸡","白银"
,"博尔塔拉","巴州","滨海","宝应","北流","博爱","北碚","宝丰","博兴","泌阳"
,"彬州市","璧山","博山","宾阳","泊头市","博罗县","博白县","北镇市","北安市","巴彦县","巴楚县","拜城县","拜泉县"
,"贺州","喀什地区","白山","恩施","淮南","阿克苏","安康","琼中","琼海","克拉玛依","日喀则","齐齐哈尔","海口","渭南","辽阳","邢台","白银","包头","广州","贵阳","甘孜","哈密","赤峰","赤峰","河池","重庆","那曲","果洛","忻州","天津","平顶山","哈尔滨","秦皇岛","阿勒泰","双鸭山","双鸭山"
,"合肥","湘西","襄阳"
,"深圳","上海"
,"延安","三亚","雅安","扬州","西安","那曲","昌都","甘孜"
,"林芝","营口","巴中","廊坊","重庆","天津","绵阳"
,"安阳","郴州","西安","绥化","玉林","宁波","朝阳","黑河","保定","邵阳"
,"锦州","蚌埠","本溪","昌都","文昌","铜仁","滨州","大理","红河","宁德","宜宾","盐城","天津","无锡","杭州"
,"哈尔滨","南宁","博尔塔拉",
,"驻马店"   ,"阿勒泰","马鞍山","焦作","玉林","巴州"
,"咸阳","那曲","重庆","惠州","林芝","淄博","沧州"
,"滨州","保定","遵义"
,"凉山"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      }
    }
};
</script>