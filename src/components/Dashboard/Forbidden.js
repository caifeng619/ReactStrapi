import React, { Component } from 'react';
import {Link} from "react-router-dom"
class Forbidden extends Component{
    render(){
        return(
            <div className="forbidden">
                <p className="error">Vänligen logga in först!</p>
                <Link className="login-link" to="/adminsida">Logga in</Link>
            </div>
        )
    }
}
export default Forbidden;