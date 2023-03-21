<style scoped lang="scss">
.grid {
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
</style>

<template>
    <div id="portfolio">
        <div class="flex mt-10">
            <div class="w-full mb-6 text-center">
                <h5 class="text-2xl font-bold text-orange-400">My Portfolio</h5>
            </div>
        </div>
        <div class="grid">
            <div>
                <a href="https://login.flexpos.com/login">
                    <img class="w-full" src="~/static/images/portfolioImages/backoffice.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Backoffice</div>
                        <span>
                        Flexpos - Backend website for POS systems.
                    </span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://profilshop.3dconfig.dk/Default/RailingCalculator?lang=6">
                    <img class="w-full" src="~/static/images/portfolioImages/profilshop.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Cembrit Roof Calculator</div>
                        <span>3d-empire - Project for calculating roofs.</span>
                    </div>
                </a>
            </div>
            <div>
                <a href="https://cb.3dconfig.dk/">
                    <img class="w-full" src="~/static/images/portfolioImages/cembrit.jpg"/>
                    <div class="card-bottom px-6 py-4">
                        <div class="font-bold text-xl">Profilshop Railing Calculator</div>
                        <span>
                            3d-empire - Project for calculating railings.
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
