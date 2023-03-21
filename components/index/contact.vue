<style scoped lang="scss">

</style>

<template>
    <panel-component id="contact" padding="null">
        <div class="flex justify-between p-7">
            <div class="w-1/2 space-y-6">
                <h5 class="text-2xl font-bold text-orange-400">Contact Me</h5>
                <h2 class="text-4xl font-bold">Reach out to me</h2>
                <div>
                    <a :href="$const.linkedinLink"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
                    <a class="ml-1" href="mailto:sh2@live.dk"><font-awesome-icon icon="fa-solid fa-envelope" /></a>
                </div>
            </div>

            <div class="w-1/2">
                <div class="w-full">
<!--                    <div class="flex flex-wrap">
                        <div class="w-full md:w-1/2 px-3 mb-6">
                            <input
                                class="block w-full bg-transparent mb-3 leading-tight pb-2 focus:outline-none placeholder:text-[#66686b] border-b border-[#66686b]"
                                type="text" placeholder="First Name">
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                            <input
                                class="block w-full bg-transparent mb-3 leading-tight pb-2 focus:outline-none placeholder:text-[#66686b] border-b border-[#66686b]"
                                type="text" placeholder="Last Name">
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                            <input
                                class="block w-full bg-transparent mb-3 leading-tight pb-2 focus:outline-none placeholder:text-[#66686b] border-b border-[#66686b]"
                                type="email" placeholder="Email Address">
                        </div>
                        <div class="w-full md:w-1/2 px-3 mb-6">
                            <input
                                class="block w-full bg-transparent mb-3 leading-tight pb-2 focus:outline-none placeholder:text-[#66686b] border-b border-[#66686b]"
                                type="text" placeholder="Subject">
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <div class="w-full px-3 mb-6">
                            <textarea class="block w-full bg-transparent leading-tight placeholder:text-[#66686b] border-b border-[#66686b]" placeholder="Message"></textarea>
                        </div>
                    </div>

                    <div class="flex flex-wrap">
                        <div class="w-full px-3 mt-6 mb-6 md:mb-0">
                            <button class="btn btn-orange font-bold !rounded-sm">Send Message</button>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
    </panel-component>
</template>

<script lang="ts">
export default {
    name: "contact",
}
</script>
