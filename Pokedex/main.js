const app = Vue.createApp({
    data(){
        return{
             pokemons : [],
             number : 40,
             recherche : "",
             nomResearch : ""
            
        }
    },
    created(){
        const loop = this.number
        for(let i=0; i<loop; i++){
            let x = i+1
            url = 'https://pokeapi.co/api/v2/pokemon/'+x
            fetch(url).
            then(res => res.json())
            .then(data => {
                let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                poke.name = data.name
                poke.id = data.id
                poke.img = data.sprites.front_default
                poke.abilities = data.abilities
                this.pokemons.push(poke)
            })
        }
    },
    methods: {
        afficherinfos(i){
            if(this.pokemons[i].showDetails == false){
                this.pokemons[i].showDetails = true
            }
            else{
                this.pokemons[i].showDetails = false
            }
              
        },
        research(){
            let nom = this.nomResearch
            console.log(nom)
            let nonTrouve = true
            let indice = 0
            while(indice < this.pokemons.length & nonTrouve){
                if(this.pokemons[indice].name == nom){
                    nonTrouve = false 
                }
                else{
                    indice++
                }
            }

            for(let i=0; i < this.pokemons.length; i++){
                this.pokemons[i].show = false
            }

            if(indice < this.pokemons.length){
                this.pokemons[indice].show = true
            }
            else{
                var url = 'https://pokeapi.co/api/v2/pokemon/'+nom;
                fetch(url).then(res =>res.json())
                .then(data => {
                    let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                    poke.name = data.name
                    poke.id = data.id
                    poke.img = data.sprites.front_default
                    poke.abilities = data.abilities
                    this.pokemons.push(poke)
                })
                this.number += 1
            }
        },
        charger(){
            this.number = this.number + 40;
            for(let i=40; i<this.number; i++){
                let x = i+1
                url = 'https://pokeapi.co/api/v2/pokemon/'+x
                fetch(url).
                then(res => res.json())
                .then(data => {
                    let poke = {id: null, name:"", img:"" , abilities:null, show : true, showDetails : false}
                    poke.name = data.name
                    poke.id = data.id
                    poke.img = data.sprites.front_default
                    poke.abilities = data.abilities
                    this.pokemons.push(poke)
                })    
            }
        },
        acceuil(){
            for(let i=0; i < this.number; i++){
                this.pokemons[i].show = true
            }
        }
    },
})

