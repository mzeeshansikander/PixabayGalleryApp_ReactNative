import { createStackNavigator, createAppContainer } from 'react-navigation'
import GalleryScreen from './screens/GalleryScreen'
import ImageScreen from './screens/ImageScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouriteImageScreen from './screens/FavouriteImageScreen'
const AppNav = createStackNavigator(
    {
        Gallery: GalleryScreen,
        Image: ImageScreen,
        Favourite: FavouriteScreen,
        FavouriteImage: FavouriteImageScreen


    });

export default createAppContainer(AppNav); 