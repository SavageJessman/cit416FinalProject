import React, { Component } from "react";
import axios from "axios";
import env from "../constants/env.js"; 

export default class Insert extends Component {

    constructor(props)
    {
        super(props);

        // set up a bound method for listening to content on EACH form field
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // set up our state variables 
        this.state = {
            firstName: '',
            lastName:  '',
            email:'',
            password:''
        }
        

    }

    // class functions
    onChangeFirstName(e)
    {
        this.setState({firstName: e.target.value});
    }

    onChangeLastName(e)
    {
        this.setState({lastName: e.target.value});
    }

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
            u_firstname: this.state.firstName,
            u_lastname: this.state.lastName,
            u_email: this.state.email,
            u_password: this.state.password
       
        }
       
        
        // log for debugging console.log(obj);

        // send our object via axios to the server

        axios({
            method: 'post',
            url: env.phpPath+'insert.php',
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
            this.setState({status : "danger", message: error.response.data.message});
        });
        console.log(obj)
       

        // check for success and if success clear our state variables for the form
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

       
        
    }
   

    render() {
        return (
            <>
                <p>Add a new User</p>
                { this.state.status ? 
                    <div className={`alert alert-${this.state.status}`}>{this.state.message}</div>
                    : null
                }
                <form onSubmit={this.onSubmit}>
                    
                    
                    
                    
                    <div className="form-group">
                        <label>First Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeFirstName}
                            value={this.state.firstName}
                        />
                    </div>
                   
                   
                   
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeLastName}
                            value={this.state.lastName}
                        />
                    </div>

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
                            value="Register User"
                            className="btn btn-primary"
                        />
                    </div>
                </form>   
            </>
        )
    }
}