import React, {Component} from "react";
import Axios from "axios";
import MovieList from "../views/MovieList.js";
import env from "../constants/env.js"; 

function Movieview({ results, openPopup }){

    constructor(props)
    {
        super(props);
        // keep our list of users available in our state variable named users
        this.state = {movie:[]};
    }


 

    componentDidMount()
    {
        // when the component loads, grab our users from our server side
        Axios.get(
            env.phpPath+"movieview.php"
        )
        .then(response => {
            // if we have data, we can dump into the console log while debugging
            console.log(response.data);

            this.setState({movie: response.data});
            
            
        })
        .catch(function (error) {
            console.log(error)
        });
    }
   
    
   
        return (
            <div>
            <h3>Movie List</h3>
            <table className='table table-striped'>
                <thead>
                    <tr>
                    <td>{this.state.movie&&this.state.movie.map(function(object, index){
                        if (index ===null ){return(
                           [] 
                        );

                        }
                     return(
                        
                    <div>
                     <a onClick={() => openPopup(result.imdbID)} >{object.m_title}</a>
                     <a></a>
                     <h1><img src={object.m_pic} class="movielist"/></h1>
                     </div>
                     ) })}
                
                
                </td>
                 

                    </tr>
                </thead>
            </table>
        </div>   
        )
    
}