import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "../redux/store";
import MainPage from "../pages/main";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <MainPage/>
        </div>
      </Provider>
  );
}

export default App;
