import React, { Component } from 'react';
import {FaCopyright} from "react-icons/fa";
import "../../style/_adminfooter.scss";

class AdminFooter extends Component {
    render() { 
        return ( 
            <div className="admin-footer">
                Copyright<FaCopyright/> 2020 Dinatänder. All rights reserved.
            </div> 
        );
    }
}
 
export default AdminFooter;