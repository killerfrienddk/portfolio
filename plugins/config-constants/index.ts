import * as constants from '~/plugins/config-constants'

declare module 'vue/types/vue' {
    interface Vue {
        $const: typeof constants
    }
}

declare module '@nuxt/types' {
    interface Context {
        $const: typeof constants
    }
}

declare module 'vuex' {
    interface ActionContext<S, R> {
        $const: typeof constants
    }
}

export {
    fullName,
    firstName,
    linkedinLink,
    email,
}

const fullName = "Simon Hjorthøj";
const firstName = fullName.split(' ')[0];
const linkedinLink = "https://www.linkedin.com/in/simon-hjorthoej";
const email = "sh2@live.dk";

