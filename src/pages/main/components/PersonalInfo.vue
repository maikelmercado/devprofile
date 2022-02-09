


<template>
    <div class="personalInfo">
        <img class="profileImg"  src="https://i.pravatar.cc/300" />
        <h1>Maikel Mercado</h1>
        <h3>Ingeniero Informático</h3>
        <router-link to="/contact" >Contáctame</router-link>
    </div>
</template>


<style>

h1,h2,h3{
    margin:0;
}

.profileImg{
    width:300px;
    height:300px;
    border-radius:150px;
    margin-bottom: 20px;
}


.personalInfo{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
}

</style>
