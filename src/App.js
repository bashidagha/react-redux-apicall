import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Posts from "./components/posts";
import React from 'react';
import "./App.css";
import tutorial from './reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif'

const store = configureStore();

class App extends React.Component{


    render(){
      return (
        <Provider store={store}>
            <img src={tutorial} style={{width:"45rem"}} alt="gif redux tutorial"/>
            <Posts />
        </Provider>
    );
    }
}

export default App;