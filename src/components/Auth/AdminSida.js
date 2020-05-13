import React, { Component } from 'react';
import AdminLogin from './AdminLogin';
import AdminProfil from './AdminProfil';

class AdminSida extends Component {
    state = { 
        token:null,
        username:null || localStorage.getItem("username"),
    }

    findUserInfo=(token, username)=>{
        this.setState({
            token,
            username
        })
        localStorage.setItem("token", this.state.token)
        localStorage.setItem("username", this.state.username)
    }
    render() { 

        const loggedIn=this.state.token || localStorage.getItem("token")
        return ( 
            <div>
                {!loggedIn 
                ? <AdminLogin callbackFromParent={this.findUserInfo}/> 
                : <AdminProfil username={this.state.username}/>}
            </div>
         );
    }
}
 
export default AdminSida;