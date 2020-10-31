<template>
    <v-app>
        <router-view></router-view>
        <copyright></copyright>
    </v-app>
</template>

<script>
import Copyright from "../components/Copyright"
export default {
    components: {
        Copyright,
    },
}
</script>

<style lang="scss" scoped>

</style>