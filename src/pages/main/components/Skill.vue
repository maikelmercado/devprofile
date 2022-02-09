<script lang="ts" setup>
    defineProps<{skill:string}>()

</script>


<template>

    <div class="skill" > 
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" class="skillImg" alt=""/>
        <span>{{skill}}</span>
    </div>

</template>


<style>
.skill{
    grid:1/6;
    padding:10px;
    background-color: lightgray;
    border-radius: 10px;
    margin:0 5px;
    display: flex;
    align-items:center;
}

.skillImg{
    min-width: 30px;
    min-height: 30px;
    max-width: 30px;
    max-height: 30px;
    border-radius:4px;
    margin-right: 10px
}

</style>


