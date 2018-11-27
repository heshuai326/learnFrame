<template>
    <div class="hello">
        <h1>hello world</h1>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

console.log()

@Component({
    name:'hello',
    
})
export default class Hello extends Vue{
    public isActive: boolean = false

    
    mounted() {
        console.log(111122222)
    }

    created() {
        console.log(1111111)
    }


}
</script>


<style>

</style>
