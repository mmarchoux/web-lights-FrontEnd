const v1 = new Vue({
    el: "#switchR",
    data: {
        state1: '',
        state2: '',
        rooms: [],
        roomsOn: [],
        roomsOff: [],
    },
    
    mounted() {
        axios.get("https://enigmatic-sands-54357.herokuapp.com/api/rooms")
            .then(response => {
                this.rooms = response.data
                console.log( this.rooms)
            }),

        axios.get("https://enigmatic-sands-54357.herokuapp.com/api/rooms/list-with-on-noise")
            .then(response => {
                this.roomsOn = response.data
                console.log( this.roomsOn)
            }),


        axios.get("https://enigmatic-sands-54357.herokuapp.com/api/rooms/list-with-off-noise")
            .then(response => {
            this.roomsOff = response.data
        console.log( this.roomsOff)
    })

    },


    methods: {
        switchAllRingers: function(state) {


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
                axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room.id+'/switchringer',{})
                .then(response => {
                    this.rooms = response.data
                })
            }

            //reload the page
            window.location.reload(false);
        
        },


        switchRinger: function(room){

            //make the request
            axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room+'/switchringer',{})
            .then(response => {
                this.rooms = response.data
            })

            //reload the page to update, I haven't found how to only update the dropdown menus
            window.location.reload(false);
        }
    },


})