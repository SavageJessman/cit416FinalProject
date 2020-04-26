import React, { Component } from "react";
import axios from "axios";
import Register from '../components/Register'
import env from "../constants/env.js"; 


export default class Insert extends Component {

    constructor(props)
    {
        super(props);

        // set up a bound method for listening to content on EACH form field

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // set up our state variables 
        this.state = {
            
            email:'',
            password:''
        }
        
        
    }

    // class functions

    setAuth=(isAuth)=>{this.setState({isAuth})}

    onChangeEmail(e)
    {
        this.setState({email: e.target.value});
    }

    onChangePassword(e)
    {
        this.setState({password: e.target.value});
    }

    onSubmit(e)
    {
        e.preventDefault();
        this.setState({status: '', message: ''});
       
        // send the data somewhere... over the rainbow?
        // create an object to pass to our DB
        const obj = {
            u_email: this.state.email,
            u_password: this.state.password
       
        }
       
        
        // log for debugging console.log(obj);

        // send our object via axios to the server

        axios({
            method: 'post',
            url: env.phpPath+'Login.php',
            data: obj,
           
          })
          .then(result => {
            if (result.message = "Your Username Password is wrong") 
            {
                // show a bootstrap alert for success
               this.setState({status : "danger", message: result.data.message});
              
            }
            else{

               this.setState({status : "success", message: result.data.message});
              

            }
        })
        .catch(error =>
        {
            console.log(error.toJSON());
            this.setState({status : "danger", message: error.response});
            
        });
        console.log(obj)
       

        // check for success and if success clear our state variables for the form
        this.setState({
             email: '',
            password: ''
        });

       
        
    }
   

    render() {
        return (
            <>
                <p>Login</p>
                { this.state.status ? 
                    <div className={`alert alert-${this.state.status}`}>{this.state.message}</div>
                    : null
                }
                <form onSubmit={this.onSubmit}>
                    
                    
                    
                    
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeEmail}
                            value={this.state.email}
                        />
                    </div>
                   
                

                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangePassword}
                            value={this.state.password}
                        />
                    </div>
                
                  
                    <div className="form-group">
                        <input
                            type="submit"
                            value="Login"
                            className="btn btn-primary"
                        />
                    </div>
                </form>  
                
            </>
        )
    }
}