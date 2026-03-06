import { Component } from "react";
import NavBar from "../components/NavBar";
import InfoPage1 from "../components/InfoPage1";
import Theory from "../components/Theory";
class Page extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <NavBar/>
                <div style={{marginTop:"50px"}}>
                    <InfoPage1/>
                </div>
                <div style={{marginTop:"75px"}}>
                    <Theory/>
                </div>
            </>
        )
    }
}

export default Page