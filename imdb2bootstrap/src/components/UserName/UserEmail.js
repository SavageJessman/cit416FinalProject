import React, {Component} from "react";


class UserEmail extends Component {

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
    render(){
return(
        <td>{this.props.obj.u_email}</td>
);

    }}
    export default UserEmail;