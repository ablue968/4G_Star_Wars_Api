const api = "https://swapi.dev/api";
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            type: ["character","planet","films","species","vehicle","starships"],
            people: [],
            planets: [],
            vehicles: [],
            favorites:new Set([])
        },
        actions: {
            getPeople(){
                const store = getStore()
                if(store.people.length === 0){
                    const endpoint =`${api}/people/`
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({people: json.results})})
                }
            },
            getPlanets(){
                const store = getStore()
                if(store.planets.length === 0){
                    const endpoint =`${api}/planets/`
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({planets: json.results})})
                }
            },
            getVehicles(){
                const store = getStore()
                if(store.vehicles.length === 0){
                    const endpoint =`${api}/vehicles/`
                    const config ={
                        method : "GET"
                    }
                    fetch(endpoint,config).then((response)=>{return response.json()}).then((json)=>{setStore({vehicles: json.results})})
                }
            },
            getFavorites(){
                const store = getStore()
                return [...store.favorites]
            },
            addFavorites(fav){
                const store = getStore()
                store.favorites.add(fav)
                setStore({favorites: store.favorites})
            },
            deleteFavorites(fav_Name){
                const store = getStore()
                store.favorites.delete(fav_Name)
                setStore({favorites: store.favorites})
            }
        }
    }
}

export default getState;