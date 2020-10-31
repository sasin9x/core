<template>
    <v-container fluid>
        <v-card 
            class="mx-auto"
            elevation="0"
        >
            <v-card-text class="text-center myBlock">
                <p class="myText-1">404</p>
                <p class="myText-2">PAGE NOT FOUND</p>
            </v-card-text>
            <v-card-text class="text-center">
                <div class="mt-5">
                    <router-link to="/">
                        <v-btn outlined color="primary">Home</v-btn>
                    </router-link>
                </div>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
        
}
</script>

<style lang="scss" scoped>
.myBlock{
    margin-top: 200px;
}
.myText-1{
    font-size: 100px;
    color: black;
}
.myText-2{
    font-size: 30px;
    margin-top: 50px;
    color: black;
}
</style>