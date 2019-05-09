import { AsyncStorage } from 'react-native';
import { TOGGLE_VIEW, FETCH_PICS } from './types'


const toggleView = (view) => ({
    type: TOGGLE_VIEW,
    data: { view }
})
const handleToggleView = (view) => async dispatch => {
    dispatch(toggleView(view))
}

const updateJsonObject = (picList) => ({

    type: FETCH_PICS,
    data: { picList }
})

const fetchPics = () => async dispatch => {
    AsyncStorage.getItem('favList')
        .then(async data => dispatch(updateJsonObject(data)))
        .catch(err => console.log(err))
}

export default {
    fetchPics,
    handleToggleView,
    updateJsonObject,
    toggleView
} 