import React, {Component} from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import AppNav from './src/Nav'
import Store from './src/Store'



export default class App extends Component {

  componentWillMount(){
    console.disableYellowBox=true;
  }
  render() {
    return (
      <Provider store={Store}>
        <AppNav />
      
      </Provider>
    )
  }
}

AppRegistry.registerComponent("ex2", () => App)
