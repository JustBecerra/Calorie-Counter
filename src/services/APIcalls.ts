import axios from 'axios'

export const getFood = async () => {
    try{
        const response = await axios.get("/FoodNeedingCondiments.json")
        return response.data
    } catch (error) {
        console.log(error)
    }
}