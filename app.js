const v = new Vue({
    el: "#app",
    data: {
        rooms: [],
    },
    
    mounted() {
        axios.get("https://enigmatic-sands-54357.herokuapp.com/api/rooms")
            .then(response => {
                this.rooms = response.data
                console.log( this.rooms)
            })
    },
    methods: {
       switchLight: function(room) {
        axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room.id+'/switchlight')
            .then(response => {
            	this.rooms = response.data
            })
        },
        switchRinger: function(room) {
        axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room.id+'/switchringer')
            .then(response => {
            	this.rooms = response.data
            })
        }
    }

})



