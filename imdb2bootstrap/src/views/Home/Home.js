import React, { Component,useState } from "react";

import "assets/css/material-dashboard-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import env from "constants/env.js";
import Results from '../../components/Results';
import Popup from '../../components/Popup';
import Login from '../../components/Login';
import ReactDOM from 'react-dom';


function App() {
    const [state, setState] = useState({
     
      results: [],
      selected: {},
      isopen: false,
    });


    

    function handleClick(e) {
      e.preventDefault();
      axios(env.phpPath+"movieview.php").then(({ data }) => {
        let results = data;
        console.log(results);

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }

        
  
    const onOpenModal = id => {
      axios(env.phpPath+"moviedetails.php?id=" + id).then(({ data }) => {
        let selected = data;
          console.log(selected,"This is the product");
          setState(prevState => {

          return { ...prevState, selected: selected, isopen: true }

         
      
        });
        
      });
    }
  
    const onCloseModal = () => {
      setState(prevState => {
        return { ...prevState, isopen: false, selected: {} }
      });
    }



/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  
    return (
      <div>
     
      <div className="App">
      

        <header>
          <h1 classNmae="col-sm news">Trending</h1>
        </header>
        <main>
        <a href="#" onClick={handleClick}>
            Click me
          </a>
  
          <Results results={state.results} onOpenModal={onOpenModal}/>
          
          {(typeof state.selected[0] != "undefined") ? <Popup open1={state.isopen} selected={state.selected[0]} onCloseModal={onCloseModal} />:false}

         
         
  
       
       
        



        </main>
      </div>
      </div>
    );
  }
  
  export default App
        
