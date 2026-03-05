import { Component } from "react";
import logo from '../assets/titlef.png'
class NavBar extends Component{
    constructor(){
        super()
        console.log("running...");
        
    }
    render(){
        return(
            <>
            <div className="navi">
            <div>
                Logo
            </div>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <a href="#" className="a">home</a>
                <a href="#" className="a">about us</a>
                <a href="#" className="a">Login</a>
            </div>
        </div>
            </>
        )
        
    }
}

export default NavBar