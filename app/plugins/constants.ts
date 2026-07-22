export default defineNuxtPlugin(() => {
    return {
        provide: {
            constants: {
                fullName: "Simon Hjorthøj",
                firstName: "Simon",
                linkedinLink: "https://www.linkedin.com/in/simon-hjorthoej",
                email: "sh2@live.dk"
            },
        },
    };
});
