<template>
    <div class="m-categroy">
        <dl>
            <dt>按拼音首字母选择:</dt>
            <dd v-for="(item, index) in letters" :key="index">{{item}}</dd>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            letters:["A","B","C","D","E","F","G","H","I" ,"J","K","L","M","N","O","P",
            "Q","R","S","T","U","V","W","X","Y","Z" ]
        }
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/public/changeCity/categroy.scss"
</style>