import axios from 'axios'

export const getFood = async () => {
    try{
        const response = await axios.get("/FoodNeedingCondiments.json")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getCondimentFood = async () => {
    try {
        const response = await axios.get("/CondimentFood.json")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getFoodTable = async () => {
    try {
        const response = await axios.get("/FoodTable.json")
        return response.data
    } catch (error) {
        console.log(error)
    }
}