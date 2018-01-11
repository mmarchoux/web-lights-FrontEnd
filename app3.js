var router = new VueRouter({
    mode: 'history',
    routes: []
});
const vm =  new Vue({
    router,
    el: '#app',
    data: {
        rooms: [],  
        buildings : [] ,
        currentbuildingid : '',
    },
    mounted: function() {
        q = this.$route.query.id
        axios.get("https://infinite-savannah-53354.herokuapp.com/api/buildings/"+q)
            .then(response => {
                this.rooms = response.data;
                console.log( this.rooms);
            
            } )
             axios.get("https://infinite-savannah-53354.herokuapp.com/api/buildings/")
            .then(response => {
                this.buildings = response.data;
                console.log( this.buildings);
            
            } )
    },
     methods: {
       switchLight: function(room) {
        axios.put('https://infinite-savannah-53354.herokuapp.com/api/buildings/'+room.id+'/switchlight')
            .then(response => {
                this.rooms = response.data
            })
    },
    switchRinger: function(room) {
        axios.put('https://infinite-savannah-53354.herokuapp.com/api/buildings/'+room.id+'/switchringer')
            .then(response => {
                this.rooms = response.data
            })
    },

        filterbyid: function() {
           console.log(this.currentbuildingid) ;
        axios.get("https://infinite-savannah-53354.herokuapp.com/api/buildings/"+this.currentbuildingid)
            .then(response => {
                this.rooms = response.data.listeroomsdto;
                console.log( this.rooms);
            
            } )
    }

}
});
