<template>
    <div class="m-product-categroy">
        <dl class="classic">
            <dt>分类</dt>
            <dt>全部</dt>
            <dd v-for="(item, index) in data[0]" :key="index">
                <m-select :name="item.title" :hotArr="item.subList" /> 
            </dd>
        </dl>
        <dl class="classic">
            <dt>区域</dt>
            <dt>美食</dt>
            <dd v-for="(item, index) in data[1]" :key="index">
                <m-select :name="item.title" :hotArr="item.subList" /> 
            </dd>
        </dl>
    </div>
</template>

<script>
import mSelect from "./select"
export default {
    data() {
        return {
            data: []
        }
    },
    components: {
        mSelect,
    },
    created() {
        this.$axios("api/meituan/list/classify.json?appkey=wlz1997_1564064546855 ").
            then(res => {
                this.data = res.data.data
                console.log(this.data)
            },err => {
                console.log(err)
            })
    }
}
</script>