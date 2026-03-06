import React from "react";
const NavBar=()=>{
    return(
        <>
            <div className=" bg-black flex justify-between p-3 text-shadow-white">
                <div className="text-amber-200">logo</div>
                <div className="flex gap-10">
                    <a href="" className="text-white">Trailer</a>
                    <a href="" className="text-white">Songs</a>
                    <a href="" className="text-white">Production</a>
                    <a href="" className="bg-white rounded p-2">Login</a>
                </div>
            </div>
        </>
    )
}
export default NavBar