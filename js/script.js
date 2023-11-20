const { createApp } = Vue

createApp({
    data() {
        return {
            title: "generatore di email",
            userMail: ""
        }
    },

    methods: {
        generaMail() {
            for (let i = 1; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                    this.userMail = response.data.response;
                    console.log(this.userMail);
                    this.userMail
                });
            }
        }
    },

})
    .mount('#app')
