const x = new Vue({
    el: "#app",
    data: {
        rooms: [],
    },
    mounted() {
        axios.get("http://localhost:8080/api/rooms")
            .then(response => {
                this.rooms = response.data
                console.log( this.rooms)
            })
    },
})