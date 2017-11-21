const v = new Vue({
    el: "#app1",
    data: {
        rooms: [],
        selected: ''
    },
    
    mounted() {
        axios.get("https://enigmatic-sands-54357.herokuapp.com/api/rooms/list-with-on-light")
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
		}
	}
})