const x = new Vue({
    el: "#app",
    data: {
        rooms: [],
    },
    mounted() {
        axios.get("https://infinite-savannah-53354.herokuapp.com/api/rooms")
            .then(response => {
                this.rooms = response.data
                console.log( this.rooms)
            })
    },
})