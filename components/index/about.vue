<template>
    <panel-component id="about" padding="null">
       <div class="flex justify-between">
           <div class="md:w-1/2 w-full p-7 space-y-5">
               <h5 class="text-2xl font-bold text-orange-400">About Me</h5>
               <div class="w-full md:hidden block">
                   <img class="w-full" src="~/static/images/myResume.jpg"/>
               </div>
               <h2 class="text-4xl font-bold">I am a Full Stack Developer</h2>
               <div>
                  Download CV · <a download class="text-orange-400 hover:text-orange-500 underline" href="/cvs/CV-Simon-Hjorthoj-English.pdf">English</a> · <a download class="text-orange-400 hover:text-orange-500 underline" href="/cvs/CV-Simon-Hjorthøj-Danish.pdf">Danish</a>
               </div>
               <div>
                   <a href="#contact" class="btn btn-orange font-bold !rounded-sm">Contact Me</a>
               </div>
           </div>
           <div class="lg:max-w-[450px] md:max-w-[430px] hidden md:block">
               <img class="w-full" src="~/static/images/myResume.jpg"/>
           </div>
       </div>
    </panel-component>
</template>

<script lang="ts">
export default {
    name: "about",
}
</script>
