import React, {Component} from "react";
import axios from "axios";
import {Redirect} from "react-router"

class RecordList extends Component {

    constructor(props)
    {
        super(props);
        // bind our delete function to our class function
        this.delete = this.delete.bind(this);

        // state variable to keep track of status of redirecting our view for
        // data changes
        this.state = {
            redirect: false
        }
    }

    


    delete()
    {


        const obj = {
            u_id: this.props.obj.u_id
       
        }
        // should take the ID of the row selected for deletion (id of the button)
        // and send that data to the external server for processing
        axios({
            method: 'post',
            url: 'http://localhost/delete.php',
            data: obj,
           
          }).then(
            this.setState({redirect: true})
        )
        .catch(error => console.log(error));
    }

    render() {
        const {redirect } = this.state;
        if (redirect)
            return <Redirect to='/view' />;
        return (
            <tr>
                <td>{this.props.obj.u_firstName}</td>
                <td>{this.props.obj.u_lastName}</td>
                <td>{this.props.obj.u_email}</td>
                <td>{this.props.obj.u_password}</td>
                <td><button className='btn btn-primary'>Edit</button></td>
                <td><button onClick={this.delete} className='btn btn-danger'>Delete</button></td>
                </tr>
        );
    }
}

export default RecordList;