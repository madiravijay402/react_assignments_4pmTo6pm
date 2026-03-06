import {Component} from 'react';
import jn from '../assets/jn1.jpg'
class InfoPage1 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment =()=>{
        this.setState(
            {
                count:this.state.count+1
            }
        )
    }
    decrement =()=>{
        this.setState({
            count:this.state.count-1
        })
    }

    tickets =()=>{
        if(this.state.count>0)
        alert(`booked tickets for ${this.state.count} persons`)
        else
            alert("cannot be negetive")
    }
    render(){
        return(
            <>
                <div className='page1'>
                    <div>
                        <img src={jn} alt="" />
                    </div>
                    <div>
                        <p style={{width:"200px", backgroundColor:'blue', height:"100px", textAlign:"center", alignContent:"center"}}>{this.state.count}</p>
                        <div className='grd'>
                            <div className='chd'>
                                <button onClick={this.increment}>+</button>
                            </div>
                            <div className='chd'>
                                <button onClick={this.decrement}>-</button>
                            </div>
                        </div>
                        <button onClick={this.tickets}>book tickets</button>
                    </div>
                </div>
            </>
        )
    }
}

export default InfoPage1;