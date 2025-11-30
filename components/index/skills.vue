<style scoped lang="scss">

/*To whom ever reads this I would normally use css grid but github does not like the tailwind .grid class*/
.grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: space-between;
    & > div {
        background-color: #262626;
        height: 64px !important;
        padding: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 1 calc(calc(100% / 8) - 16px);

        & > img {
            height: 100%;
            width: 100%;
            object-fit: contain;
        }
    }
}

@media (max-width: 768px) {
    #skills-grid {
        justify-content: center;

        & > div {
            flex: 1 1 calc(calc(100% / 4) - 16px);
        }
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
        <div id="skills-grid" class="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-4">
            <div title="Nuxt">
                <img src="~/static/images/skills/nuxt.webp" loading="lazy"/>
            </div>
            <div title="Vue">
                <img src="~/static/images/skills/vue.webp" loading="lazy"/>
            </div>
            <div title="Blazor">
                <img src="~/static/images/skills/blazor.webp" loading="lazy"/>
            </div>
            <div title=".net">
                <img src="~/static/images/skills/dotnet.webp" loading="lazy"/>
            </div>
            <div title="Typescript">
                <img src="~/static/images/skills/typescript.webp" loading="lazy"/>
            </div>
            <div title="VB">
                <img src="~/static/images/skills/VB.webp" loading="lazy"/>
            </div>
            <div title="Mysql">
                <img src="~/static/images/skills/mysql.webp" loading="lazy"/>
            </div>
            <div title="Mssql">
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
