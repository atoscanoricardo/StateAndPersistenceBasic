import { defineStore } from 'pinia'

export const useWeatherStore = defineStore({
    id:'Weather',
    state: () => ({ 
        weather: {} 
    }),
    persist: {
        storage: persistedState.localStorage,
    },
    getters: {
        getWeather: (state) => state.weather        
    },
    actions: {
        async getWeatherData(){
            const { data } = await useFetch('/api/waether')
            if(data.value !== null && data.value !== undefined){
                this.weather = data.value                
            }                    
        }
    }
})

