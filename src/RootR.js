import {
    combineReducers
} from 'redux';
import GalleryReducer from './reducers/GalleryReducer';
import FavouriteReducer from './reducers/FavouriteReducer';


export default combineReducers({
    GalleryScreen: GalleryReducer,
    FavouriteScreen: FavouriteReducer
})