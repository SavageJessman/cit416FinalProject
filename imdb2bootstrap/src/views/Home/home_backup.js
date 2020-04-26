import React, { Component,useState } from "react"

import "assets/css/material-dashboard-react.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

import Results from '../../components/Results'
import Popup from '../../components/Popup'
import ReactDOM from 'react-dom';
import { Modal } from "@material-ui/core";




function App() {
    const [state, setState] = useState({
     
      results: [],
      selected: [],
      isopen: false,
    });


    const apiurl = "http://localhost/movieview.php";

    function handleClick(e) {
      e.preventDefault();
      axios(apiurl).then(({ data }) => {
        let results = data;
        console.log(results);

        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }

        
  
    const onOpenModal = id => {
      axios("http://localhost/moviedetails.php?id=" + id).then(({ data }) => {
        let selected = data;
          console.log(selected,"This is the product");
          setState(prevState => {

          return { ...prevState, selected: selected, isopen: true }

         
      
        });
        
      });
    }
  
    const onCloseModal = () => {
      setState(prevState => {
        return { ...prevState, isopen: false}
      });
    }


let model

    if(state.isopen == true && state.selected[0].m_title !='undefined' ){
model=


<Modal open onClose={onCloseModal} >
<div className='paper'>
<h2 >Text in a modal</h2>
<p>{
console.log(state.selected[0].m_title)
}
 {state.selected[0].m_title}
 {state.selected[0].m_pic}
 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
 </p>
<button onClick={onCloseModal} >Close</button>

</div>

</Modal>;

    }
    else{
      model="These has been an error";
    }



/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  
    return (
      <div className="App">
        <header>
          <h1>moviex</h1>
        </header>
        <main>
        <a href="#" onClick={handleClick}>
            Click me
          </a>
  
          <Results results={state.results} onOpenModal={onOpenModal} />
          {model}
      

         
         
  
       
       
        



        </main>
      </div>
    );
  }
  
  export default App
        
