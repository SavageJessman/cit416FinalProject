import React, { Component } from "react";
import axios from "axios";


export default class Comment extends Component {

    constructor(props)
    {
        super(props);

        // set up a bound method for listening to content on EACH form field

        this.onChangeComment = this.onChangeComment.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // set up our state variables 
        this.state = {

            user_id:'13',
            title:'',
            comment:''
         
        }
        
        
    }

    onChangeTitle(e)
    {
        this.setState({title: e.target.value});
       
        
    }
   
    onChangeComment(e)
    {
        this.setState({comment: e.target.value});
       
        
    }
    
    onSubmit(e)
    {
       
        e.preventDefault();
        this.setState({status: '', message: ''});
       
        // send the data somewhere... over the rainbow?
        // create an object to pass to our DB
        const obj = {
            title:this.state.title,
            comment: this.state.comment,
            user_id:this.state.user_id,
            movie_id:this.props.Movieid,

           
       
        }
       
        
        // log for debugging console.log(obj);

        // send our object via axios to the server

        axios({
            method: 'post',
            url: 'http://localhost/insert1.php',
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
       

        // check for success and if success clear our state variables for the form
        this.setState({
            user_id:'13',
             comment:'',
             title:''
        });

       
        
    }
   

    render() {
        return (
            <>
                <p>Comment</p>
                { this.state.status ? 
                    <div className={`alert alert-${this.state.status}`}>{this.state.message}</div>
                    : null
                }
                <form onSubmit={this.onSubmit}>
                    
                    
                <div className="form-group">
                        <label>Comment Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeTitle}
                            value={this.state.title}
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Comment:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeComment}
                            value={this.state.comment}
                        />
                    </div>
            
                
                  
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