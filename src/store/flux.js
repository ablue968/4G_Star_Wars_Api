export default function({ getStore, getActions, setStore }) {
    return {
        store: {
            people: [],
            planets: []
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
            }

        }
    }
}