import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Getgit from './components/getgit'

function App() {
  return (
    <div class="bg-dark full">
      <body class="container bg-dark text-white">
        <h1 class="text-center p-5">GIT repository commits display</h1>
        <Getgit/>
      </body>
    </div>
  );
}

export default App;
