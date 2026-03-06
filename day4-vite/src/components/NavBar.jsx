import React from "react";
import logo from "../assets/titlef.png"
const NavBar=()=>{
    return(
        <>
            <div className=" bg-black flex justify-between p-2 text-shadow-white">
                <div className="text-amber-200 relative size-32"><img src={logo} alt="" /></div>
                <div className="flex gap-10 items-center mx-1 ">
                    <a href="https://youtu.be/fJaAYcERf3Y?si=AOXGqy68w-IkYh4g" className="text-white">Trailer</a>
                    <a href="https://open.spotify.com/playlist/0rES2Byrozz9TnaUTKAsWo?si=33091830d92d4981" className="text-white">Songs</a>
                    <a href="https://www.kvnproductions.co.in/" className="text-white">Production</a>
                    <a href="" className="bg-white rounded p-2 hover:bg-amber-200 text-black">Login</a>
                </div>
            </div>
        </>
    )
}
export default NavBar