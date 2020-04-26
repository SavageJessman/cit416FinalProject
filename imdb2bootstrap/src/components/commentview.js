import React, {Component} from "react";
import axios from "axios";
import MovieList from "../views/MovieList.js";
import env from "constants/env.js";
export default class commentview extends Component{

    constructor(props)
    {
        super(props);
        // keep our list of users available in our state variable named users
        this.state = {comment11:[]};
    }

    


 

    componentDidMount()
    {

        const obj = {
            movieid:this.props.movieid,
           
    
           
       
        }
        // when the component loads, grab our users from our server side
        axios({
            method: 'post',
            url: env.phpPath+'commentview.php',
            data: obj,
           
          })
          .then(result => {
      
            this.setState({comment11:result.data});
            console.log(result)
            })
       
        
    }
   
    
   render(){       
       return (
            <div>
            <h3>Comments</h3>
            <table className='table table-striped comment'>
                <thead>
                    <tr>
                    <td>{this.state.comment11&&this.state.comment11.map(function(object, index){
                     return(
                        
                    <div>
                     <h5>Title: {object.c_title}</h5>
                     <h6>Comment: {object.c_comment}</h6>
                     <h7>Username:{object.u_Name}</h7>
                     <hr></hr>
                     </div>
                     
                     )})}
                
                
                </td>
                 

                    </tr>
                </thead>
            </table>
        </div>   
        )
    }
    
}