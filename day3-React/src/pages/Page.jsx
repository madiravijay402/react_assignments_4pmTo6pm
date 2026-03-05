import { Component } from "react";
import NavBar from "../components/NavBar";
import InfoPage1 from "../components/InfoPage1";
class Page extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <NavBar/>
                <InfoPage1/>
            </>
        )
    }
}

export default Page