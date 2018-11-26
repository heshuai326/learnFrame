<template>
    <div id="app">
        <h1>hello APP.vue</h1>
        <router-view/>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class App extends Vue{

}
</script>


<style>
#app{
    height: 100%;
}
</style>
