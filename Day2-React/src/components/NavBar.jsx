import React from "react";
import logo from "../assets/prd2.jpg"
const NavBar=()=>{
    return(
        <>
        
             <div style={{boxSizing:'border-box'}}>
                <img src={logo} alt="" style={{boxSizing:"border-box",width:"20%"}} />
            </div>
        
            <div className="links">
                <a href="https://youtu.be/fJaAYcERf3Y?si=AOXGqy68w-IkYh4g" style={{color:"white", textDecoration:"none"}}>trailer</a>
                <a href="https://open.spotify.com/playlist/0rES2Byrozz9TnaUTKAsWo?si=33091830d92d4981"  style={{color:"white",textDecoration:"none"}}>album</a>
                <a href="https://www.kvnproductions.co.in/"  style={{color:"white",textDecoration:"none"}}>contact</a>
            </div>
           
            
                
        </>
    )
}
export default NavBar;