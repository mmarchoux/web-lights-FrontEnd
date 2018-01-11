const x = new Vue({
    el: "#app",
    data: {
        buildings: [],  
       numberroom : [] ,
    },
    
    mounted() {
        axios.get("https://infinite-savannah-53354.herokuapp.com/api/buildings")
            .then(response => {
                this.buildings = response.data;
                console.log( this.buildings);
            
            } )
    }

})