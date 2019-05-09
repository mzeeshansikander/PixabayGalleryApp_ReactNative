import { TOGGLE_VIEW, SEARCH_PICS, FETCH_PICS } from '../actions/types';

const initialState = {
    view: 'Grid',
    picsList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case FETCH_PICS:
            return {
                ...state,
                picsList: action.data.picList
            }

        case TOGGLE_VIEW:
            return {
                ...state,
                view: action.data.view
            }

        default:
            return state
    }
}