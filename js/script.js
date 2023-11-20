const {createApp} = Vue

createApp({
    data() {
        return {
            title: "generatore di email",
            userMail: ""
        }
    },
    
    methods: {
        generaMail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                this.userMail = response.data.response;
            });
        }
    },

})
.mount('#app')
