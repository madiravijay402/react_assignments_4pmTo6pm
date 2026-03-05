import React from "react"
import vijay from "../assets/jn1.jpg"
const Cast=()=>{
    return(

        <>
            <div className="cast">
                <h2 style={{textAlign:'center',color:'white',marginBottom:"50px"}}>cast details</h2>
                <div className="case1">
                    <div style={{textAlign:'center'}}>
                    <img src={vijay} alt="" />
                    </div>
                    <div>
                        <ul style={{listStyle:"none"}}>
                            <li><h3 style={{textDecoration:"underline red",color:"white", marginBottom:"10px"}}><strong>Thalapathy Vijay</strong></h3></li>
                            <li style={{color:"whitesmoke",textDecoration:"null"}}>joseph vijay chandrasekhar people call him thalapathy vijay known for blockbuster films like gilli thirupaachi kaththi mersal thupaaki master and Leo </li>
                            <li style={{color:"whitesmoke",textDecoration:"null"}}>he is also well known politician and chairperson of the party TVK very in TamilNadu state politics</li>
                        </ul>
                    </div>
                </div>
                <div className="case2">
                    
                </div>
                <div className="case3">
                    
                </div>
                <div className="case4">
                    
                </div>
            </div>
        </>
    )
}
export default Cast