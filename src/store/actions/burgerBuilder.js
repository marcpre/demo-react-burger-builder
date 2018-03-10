import * as actionTypes from './actionTypes'
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
}

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://fir-react-burger-builder.firebaseio.com/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data))
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed())
            })
    }
}
