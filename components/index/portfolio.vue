<style scoped lang="scss">
#portfolio-grid {
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
}

.card-bottom {
    background-color: #262626;

    & > span {
        color: #d7d7d7;
        font-size: 12px;
    }
}
@media (max-width: 768px) {
    #portfolio-grid {
        grid-template-columns: 1fr;
        grid-gap: 25px;
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
        <div id="portfolio-grid" class="grid">
            <div>
                <a href="https://visitor-dashboard.flexpos.com/">
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Visitor Dashboard</div>
                        <span>
                        <b>Amero</b> - Provides real-time attendance information for an attraction.
                    </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://skat.dk/erhverv/nye-krav-til-digital-salgsregistrering-for-visse-brancher-i-2024/for-leverandoerer-system-til-digital-salgsregistrering">
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">SAF-T</div>
                        <span>
                        <b>Amero</b> - Created the system for the new laws from the danish government.
                    </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://event-orders.flexpos.com">
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Event Orders</div>
                        <span>
                        <b>Amero</b> - Organizing of events, Major customer: <a class="text-orange-400 hover:text-orange-500" href="https://legohouse.com">Lego House</a>.
                    </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://service-module.flexpos.com">
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Service Module</div>
                        <span>
                        <b>Amero</b> - Assists retail stores in efficiently managing their incoming orders.
                    </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://login.flexpos.com/login">
                    <img class="w-full" loading="lazy" src="~/static/images/portfolioImages/backoffice.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Backoffice</div>
                        <span>
                            <b>Flexpos</b> - Backend website for POS systems.
                        </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://profilshop.3dconfig.dk/Default/RailingCalculator?lang=6">
                    <img class="w-full" loading="lazy" src="~/static/images/portfolioImages/profilshop.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Cembrit Roof Calculator</div>
                        <span>
                            <b>3d-empire</b> - Roof Calculator.
                        </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://cb.3dconfig.dk/">
                    <img class="w-full" loading="lazy" src="~/static/images/portfolioImages/cembrit.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Profilshop Railing Calculator</div>
                        <span>
                            <b>3d-empire</b> - Railing Calculator.
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "portfolio",
}
</script>
