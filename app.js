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
    methods: {
       switchLight: function(room) {
        axios.put('http://localhost:8080/api/rooms/'+room.id+'/switchlight')
            .then(response => {
            	this.rooms = response.data
            })
    },
    switchRinger: function(room) {
        axios.put('http://localhost:8080/api/rooms/'+room.id+'/switchringer')
            .then(response => {
            	this.rooms = response.data
            })
    }


}

})