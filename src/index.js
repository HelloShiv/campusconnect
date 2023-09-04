import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import  {FirebaseProvider} from './context/Firebase'

ReactDOM.render(
  <FirebaseProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseProvider>,

document.getElementById("root")
);