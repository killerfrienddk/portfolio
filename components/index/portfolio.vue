<style scoped lang="scss">
#portfolio-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
}

#portfolio-grid > div {
    flex: 1 1 calc(50% - 25px);
    box-sizing: border-box;
}

.card-bottom {
    background-color: #262626;

    & > span {
        color: #d7d7d7;
        font-size: 12px;
    }
}

@media (max-width: 768px) {
    #portfolio-grid > div {
        flex: 1 1 100%;
    }
}
</style>

<template>
    <div id="portfolio">
        <div class="mt-6 lg:mt-10">
            <div class="w-full mb-6 text-center">
                <h5 class="text-2xl font-bold text-orange-400">My Portfolio</h5>
            </div>
        </div>
        <div id="portfolio-grid">
            <template v-for="project in projects">
                <div>
                    <a :href="project.link" target="_blank">
                        <img v-if="project.image" class="bg-cover lg:h-[260px] " loading="lazy" :src="project.image"/>
                        <div class="card-bottom p-4">
                            <div class="font-bold text-xl">{{ project.name }}</div>
                            <span>
                                <b>{{ project.company }}</b><span v-html="project.description"></span>
                            </span>
                        </div>
                    </a>
                </div>
            </template>
            <div class="empty-placeholder"></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "portfolio",
    data() {
        return {
            projects: [
                {
                    link: "https://visitor-dashboard.flexpos.com",
                    name: "Visitor Dashboard",
                    company: "Amero",
                    description: " - Provides real-time attendance information for an attraction."
                },
                {
                    link: "https://skat.dk/erhverv/nye-krav-til-digital-salgsregistrering-for-visse-brancher-i-2024/for-leverandoerer-system-til-digital-salgsregistrering",
                    name: "SAF-T - Anti Whitewashing System",
                    company: "Amero",
                    description: " - A system for the prevention of whitewashing."
                },
                {
                    link: "https://event-orders.flexpos.com",
                    name: "Event Orders",
                    company: "Amero",
                    description: ' - Organizing of events, Major customer: <a class="text-orange-400 hover:text-orange-500" href="https://legohouse.com">Lego House</a>.'
                },
                {
                    link: "https://service-module.flexpos.com",
                    name: "Service Module",
                    company: "Amero",
                    description: " - Assists retail stores in efficiently managing their incoming orders."
                },
                {
                    link: "https://login.flexpos.com/login",
                    image: "/images/portfolioImages/backoffice.jpg",
                    name: "Backoffice",
                    company: "Flexpos",
                    description: " - Backend website for POS systems."
                },
                {
                    link: "https://swisspearl.3dconfig.dk/",
                    image: "/images/portfolioImages/swisspearl.jpg",
                    name: "Swisspearl Roof Calculator",
                    company: "3d-empire",
                    description: " - Roof Calculator."
                },
                {
                    link: "https://profilshop.3dconfig.dk/Default/RailingCalculator?lang=6",
                    image: "/images/portfolioImages/profilshop.jpg",
                    name: "Profilshop Railing Calculator",
                    company: "3d-empire",
                    description: " - Railing Calculator."
                },

            ],
        }
    }
}
</script>
