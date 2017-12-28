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
        switchAllLight: function(state) {

            if(this.state=='ON'){
                listRooms = roomsOn;
            }
            else{
                listRooms = roomsOff;
            }

            for(var i = 0; i<listRooms.length; i++){
                var room = listRooms[i];
                switchLight(room);
            }
        
        },


        switchLight: function(room) {
            axios.put('https://enigmatic-sands-54357.herokuapp.com/api/rooms/'+room+'/switchlight',{})
            .then(response => {
                this.rooms = response.data
            })

            window.location.reload(false);
        }
    }

})

/*var refresh = window.getElementById('refresh');
refresh.addEventListener('click', location.reload(), false);*/