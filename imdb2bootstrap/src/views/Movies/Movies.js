import React, { Component } from "react";
import axios from "axios";


export default class Insert extends Component {

    
state = {
title: '',
synopsis:  '',
cast:'',
releasedate:'',
genre:'',
image:null
}


// class functions
handleCHange=(e)=>{
this.setState({
[e.target.id]:e.target.value
})
};

handleImageChange = (e) => {
this.setState({
image: e.target.files[0]
})
};

t




    handleSubmit=(e)=>
    {
        e.preventDefault();
        
       

            
            let form_data = new FormData();

           
            /*
            form_data.append('title', this.state.title);
            form_data.append('synopsis', this.state.synopsis);
            form_data.append('releasedate', this.state.releasedate);
            form_data.append('genre', this.state.genre);
            form_data.append('m_cast', this.state.cast);
            form_data.append('image', this.state.image.name);
*/

form_data.append('title',this.state.title);
form_data.append('synopsis',this.state.synopsis);
form_data.append('releasedate',this.state.releasedate);
form_data.append('genre',this.state.genre);
form_data.append('m_cast',this.state.cast);
form_data.append('image_name',this.state.image.name);
form_data.append('image',this.state.image);


            let url = 'http://localhost/movieinsert.php';
            axios.post(url, form_data, {
            headers: {
            'content-type': 'multipart/form-data'
            }
            })
            .then(result => {
            console.log(result.data);
            if (result.status == "201") 
            {
            
               this.setState({status : "success", message: result.data.message});
            }
            console.log(result)
        })
        .catch(error =>
        {
            console.log(error.toJSON());
            this.setState({status : "danger", message: error.response.data.message});
            console.log(form_data);
        });
        
            


       

        // check for success and if success clear our state variables for the form
       this.setState({
            title: '',
            synopsis: '',
            cast: '',
            releasedate: '',
            genre:'',
            image:null
         });

       
        
    }

    render() {
        return (
            <>
                <p>Add a Movie</p>

                { this.state.status ? 
                    <div className={`alert alert-${this.state.status}`}>{this.state.message}</div>
                    : null
                }
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            id="title"
                            className="form-control"
                            onChange={this.handleCHange}
                            value={this.state.title}
                            required
                            
                        />
                    </div>

                    <div className="form-group">
                        <label>Synopsis:</label>
                        <input
                            type="text"
                            id="synopsis"
                            className="form-control"
                            onChange={this.handleCHange}
                            value={this.state.synopsis}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Cast Members:</label>
                        <input
                            type="text"
                            id="cast"
                            className="form-control"
                            onChange={this.handleCHange}
                            value={this.state.cast}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Release Date:</label>
                        <input
                            type="date"
                            id="releasedate"
                            className="form-control"
                            onChange={this.handleCHange}
                            value={this.state.releasedate}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            className="form-control"
                            onChange={this.handleCHange}
                            value={this.state.genre}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Thumbnail:</label>
                        <input
                            type="file"
                            id="image"
                            accept="image/png, image/jpeg"
                            className="form-control"
                            onChange={this.handleImageChange}
                            required
                        />
                    </div>
                    

                    <div className="form-group">
                        <input
                            type="submit"
                            value="Add Movie"
                            className="btn btn-primary"
                        />
                    </div>
                </form>   
            </>
        )
    }
}