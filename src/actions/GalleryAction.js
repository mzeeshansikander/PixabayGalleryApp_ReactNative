import { TOGGLE_VIEW, SEARCH_PICS } from './types'

const toggleView = (view) => ({
    type: TOGGLE_VIEW,
    data: { view }
})

const handleToggleView = (view) => async dispatch => {
    dispatch(toggleView(view))
}

const updatePicsList = (picList) => ({
    type: SEARCH_PICS,
    data: { picList }
})

const handlePicsSearch = (searchQuery) => async dispatch => {
    const pixabayKey = '12330370-97cbaf633b95355d4476a65ff'
    const url = `https://pixabay.com/api/?key=${pixabayKey}&q=${searchQuery}&per_page=50&image_type=photo`
    const options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
    const request = new Request(url, options)

    await fetch(request)
        .then(response => response.json())
        .then(async data => dispatch(updatePicsList(data.hits)))
        .catch(err => console.log(err))
}

export default {
    handlePicsSearch,
    handleToggleView,
    updatePicsList,
    toggleView
} 