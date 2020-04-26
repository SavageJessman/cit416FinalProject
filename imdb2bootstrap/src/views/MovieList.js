import React, {Component} from "react";

import {Redirect} from "react-router"

class MovieList extends Component {

    constructor(props)
    {
        super(props);
        // bind our delete function to our class function
      

        // state variable to keep track of status of redirecting our view for
        // data changes
        this.state = {
            redirect: false
        }
    }



    render() {
  
        return (
            <tr>
                <td>{this.props.obj.m_title}</td>
                <td>{this.props.obj.m_synopsis}</td>
                <td>{this.props.obj.m_genre}</td>
                <td>{this.props.obj.m_cast}</td>
                <td></td>
                <td></td>
                </tr>
        );
    }
}

export default MovieList;