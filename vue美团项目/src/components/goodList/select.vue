<template>
    <div class="m-product-select">
        <dl class="tab">
            <dt>
                {{name}}
                <i class="el-icon-caret-bottom"></i> 
            </dt>
            <dd>
                <dt>{{ name }}</dt>
                <span v-for="(item, index) in hotArr" :key="index"></span>
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    props: ["name","hotArr"],
    data() {
        return {
           
        }
    }
}
</script>