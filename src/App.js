import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Getgit from './components/getgit'
import Conf from './config'

function App() {
  return (
    <div class="bg-dark full">
      <body class="container bg-dark text-white">
        <h1 class="text-center pt-3">GIT repository</h1>
        <h1 class="text-center pb-3">commits display</h1>
        <Getgit/>
        <div class="row mt-5">
          <div class="col text-center">El enlace al repositorio se puede encontrar:</div>
          <br/>
          <a href={Conf.REPOSITORY.Link} class="col text-center font-weight-bold">
            AQUI
          </a>
        </div>
      </body>
    </div>
  );
}

export default App;
