import React, { Component } from "react";
import axios from "axios";
import env from "../constants/env.js"; 

export default class rating extends Component {

    constructor(props)
    {
        super(props);

        // set up a bound method for listening to content on EACH form field

        
       

        this.onSubmit = this.onSubmit.bind(this);

        // set up our state variables 
        this.state = {

            user_id:'1',
            rating:''
         
        }
        
        
    }
  
 
    
    onSubmit(e)
    {
       
        e.preventDefault();
        this.setState({status: '', message: ''});
       
        // send the data somewhere... over the rainbow?
        // create an object to pass to our DB
        const obj = {
           
            rating: this.menu.value,
            user_id:this.state.user_id,
            movie_id:this.props.Movieid,

           
       
        }
        axios({
            method: 'post',
            url: env.phpPath+'insert2.php',
            data: obj,
           
          })
          .then(result => {
            if (result.status == "201") 
            {
                // show a bootstrap alert for success
               this.setState({status : "success", message: result.data.message});
              
            }
            console.log(result)
        })
        .catch(error =>
        {
            
            console.log(error.toJSON());
       
            
        });
        console.log(obj)
    

        
        console.log(obj);
       

        // check for success and if success clear our state variables for the form
        this.setState({
            user_id:'1'
           
        });

       
        
    }
    
   

    render() {
        return (
            <>
                <p>Rating</p>
                { this.state.status ? 
                    <div className={`alert alert-${this.state.status}`}>{this.state.message}</div>
                    : null
                }
                 <form onSubmit={this.onSubmit}>
                <select id = "dropdown" ref = {(input)=> this.menu = input}>
    <option value="N/A">N/A</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
</select>
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Comment"
                            className="btn btn-primary"
                        />
                    </div>

                </form>  
            </>
        )
    }
}