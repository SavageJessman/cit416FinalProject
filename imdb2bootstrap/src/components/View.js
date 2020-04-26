import React, {Component} from "react";
import Axios from "axios";
import RecordList from "../views/RecordList.js";
import env from "../constants/env.js"; 


export default class View extends Component {

    constructor(props)
    {
        super(props);
        // keep our list of users available in our state variable named users
        this.state = {users: []};
    }

    userList()
    {
        return this.state.users.map(function(object, i)
        {
           return <RecordList obj={object} key={i} />
        });
    }

    componentDidMount()
    {
        // when the component loads, grab our users from our server side
        Axios.get(env.phpPath+"view.php"
        )
        .then(response => {
            // if we have data, we can dump into the console log while debugging
            console.log(response.data);
            // if successful, set our users state variable to the data returned 
            // from the server
            this.setState({users : response.data});
        })
        .catch(function (error) {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
                <h3>User List</h3>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th colspan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.userList()}
                    </tbody>
                </table>
            </div>   
        )
    }
}