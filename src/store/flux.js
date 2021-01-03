export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            people: [],
            planets: [],
            vehicles: []
        },
        actions: {
            getPeople(){
                const store = getStore()
                if(store.people.length === 0){
                    const endpoint ="https://swapi.dev/api/people/"
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({people: json.results})})
                }
            },
            getPlanets(){
                const store = getStore()
                if(store.planets.length === 0){
                    const endpoint ="https://swapi.dev/api/planets/"
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({planets: json.results})})
                }
            },
            getVehicles(){
                const store = getStore()
                if(store.vehicles.length === 0){
                    const endpoint ="https://swapi.dev/api/vehicles/"
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({vehicles: json.results})})
                }
            }

        }
    }
}