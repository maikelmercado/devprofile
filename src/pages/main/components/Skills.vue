<script lang="ts" setup>
    import Skill from './Skill.vue';

    const mySkills = [
        'html',
        'css',
        'javascript',
        'html',
        'css',
        'javascript',
        'html',
        'css',
        'javascript'
    ];



</script>




<template>
    <h2>Skills</h2>
    <div class="skillsContainer">
        <Skill v-for="s in mySkills" :skill="s" />
    </div>

    
</template>


<style>


@media (max-width:600px){
    .skillsContainer{
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width:600px){
 .skillsContainer{
        grid-template-columns: repeat(6, 1fr);
    }
}

.skillsContainer{
    width: 100%;
    display:grid;
   
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}

</style>