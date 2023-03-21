<style scoped lang="scss">
</style>

<template>
    <panel-component id="about" padding="null">
       <div class="flex justify-between">
           <div class="w-1/2 p-7 space-y-5">
               <h5 class="text-2xl font-bold text-orange-400">About Me</h5>
               <h2 class="text-4xl font-bold">I am a Full Stack Developer</h2>
               <div>
                  Download CV · <a download class="text-orange-400 hover:text-orange-500 underline" href="/cvs/CV-Simon-English.pdf">English</a> · <a download class="text-orange-400 hover:text-orange-500 underline" href="/cvs/CV-Simon-Danish.pdf">Danish</a>
               </div>
               <div>
                   <a href="#contact" class="btn btn-orange font-bold !rounded-sm">Contact Me</a>
               </div>
           </div>
           <div class="w-1/2">
               <img src="~/static/images/myResume.jpg"/>
           </div>
       </div>
    </panel-component>
</template>

<script lang="ts">
export default {
    name: "about",
}
</script>
