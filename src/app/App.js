import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "../redux/store";
import IndexContainer from "../pages/main/indexContainter";

function App() {
  return (
      <Provider store={store}>
        <div className="App">
          <IndexContainer/>
        </div>
      </Provider>
  );
}

export default App;
