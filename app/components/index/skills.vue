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
            <template v-for="skill in skills">
                <div :title="skill">
                    <img :src="'/images/skills/' + skill.toString().toLowerCase() + '.webp'" loading="lazy"/>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
const skills = ref([
    "Nuxt",
    "Vue",
    ".net",
    "Typescript",
    "VB",
    "Mysql",
    "Mssql",
]);
</script>
