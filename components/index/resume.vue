<template>
    <panel-component id="resume">
        <div class="w-full mb-6 text-center">
            <h5 class="text-2xl font-bold text-orange-400">My Resume</h5>
        </div>
        <div class="flex md:flex-row flex-col space-y-8">
            <div class="md:w-3/5 w-full space-y-5">
                <h5 class="text-1xl font-extralight text-yellow-600">EXPERIENCE</h5>
                <h2 class="text-3xl sm:text-4xl font-bold">More than {{getYears()}} years <span class="block clear-both"></span> experience as a <span class="block clear-both"></span><span class="text-orange-400">Software Developer</span></h2>
            </div>
            <div class="md:w-2/5 w-full">
                <timeline>
                    <timeline-point start-date="01-04-2025" :date-moment="true" title="Full Stack Developer" detail="IT Forum Gruppen A/S · Full-time · Hybrid"/>
                    <timeline-point start-date="12-04-2023" end-date="01-04-2025" :date-moment="true" title="Full Stack Developer" detail="Amero ApS · Full-time · Hybrid"/>
                    <timeline-point start-date="10-06-2021" end-date="12-04-2023" :date-moment="true" title="Full Stack Developer(Merged with Amero)" detail="FlexPOS ApS · Full-time · Hybrid"/>
                    <timeline-point start-date="03-01-2019" end-date="06-01-2021" :date-moment="true" title="Apprentice Developer" detail="3d-empire A/S · Apprenticeship"/>
                </timeline>
                <timeline-separator title="Education"/>
                <timeline>
                    <timeline-point start-date="2019" end-date="2021" title="3D College Denmark" detail="Multimedia Integrator, Grade: A/12"/>
                    <timeline-point start-date="2016" end-date="2018" title="3D College Denmark" detail="Web Integrator, Grade: A/12"/>
                </timeline>
            </div>
        </div>
    </panel-component>
</template>

<script lang="ts">
export default {
    name: "resume",
    methods: {
        getYears() {
            let date = this.$moment();

            return date.clone().diff('01-01-2019', 'year');
        }
    }
}
</script>
