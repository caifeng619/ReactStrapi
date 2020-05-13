import React, { Component } from 'react';

class Logout extends Component {

    componentDidMount() {
        localStorage.clear();
        window.location.replace("http://localhost:3000/adminsida");
    }
    
    render() { 
        return ( 
        <div></div>
         );
    }
}
 
export default Logout;