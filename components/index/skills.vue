<style scoped>
.grid {
    & div {
        background-color: #262626;
        height: 64px;
        width: 64px;
        margin: 0 auto;
        padding: 8px;
    }

}

</style>

<template>
    <div id="skills" class="mt-10">
        <div class="mt-6 lg:mt-10">
            <div class="w-full mb-6 text-center">
                <h5 class="text-2xl font-bold text-orange-400">My Skills</h5>
            </div>
        </div>
        <div class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
            <div>
                <img src="~/static/images/skills/nuxt.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/vue.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/blazor.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/dotnet.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/typescript.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/vb.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/mysql.webp" loading="lazy"/>
            </div>
            <div>
                <img src="~/static/images/skills/mssql.webp" loading="lazy"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: "skills",
}
</script>
