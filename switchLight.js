const v2 = new Vue({
    el: "#switchL",
    data: {
        state1: '',
        state2: '',
        room: '',
        rooms: [],
        roomsOn: [],
        roomsOff: [],
    },
    
    mounted() {
        axios.get('https://enigmatic-sands-54357.herokuapp.com/api/rooms')
            .then(response => {
                this.rooms = response.data
                console.log(this.rooms)
            }),

        axios.get('https://enigmatic-sands-54357.herokuapp.com/api/rooms/list-with-on-light')
            .then(response => {
                this.roomsOn = response.data
                console.log(this.roomsOn)
            }),


        axios.get('https://enigmatic-sands-54357.herokuapp.com/api/rooms/list-with-off-light')
            .then(response => {
            this.roomsOff = response.data
        console.log(this.roomsOff)
    })

    },


    methods: {
        switchAllLights: function(state) {

            //select the list corresponding to the state
            if(state === 'ON'){
                listRooms = this.roomsOn;
            }
            else{
                listRooms = this.roomsOff;
            }

            //make the request
            for(var i = 0; i<listRooms.length; i++){
                var room = listRooms[i];
                axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room.id+'/switchlight',{})
                .then(response => {
                    this.rooms = response.data
                })
            }

            //reload the page
            window.location.reload(false);
        
        },


        switchLight: function(room) {

            //make the request
            axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room+'/switchlight',{})
            .then(response => {
                this.rooms = response.data
            })

            //reload the page to update, I haven't found how to only update the dropdown menus
            window.location.reload(false);
        }
    }

})

/*var refresh = window.getElementById('refresh');
refresh.addEventListener('click', location.reload(), false);*/