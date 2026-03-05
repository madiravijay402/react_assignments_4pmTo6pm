import {Component} from 'react';
import jn from '../assets/jn1.jpg'
class InfoPage1 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState=this.state.count+1
    }
    decrement(){
        this.setState=this.state.count-1;
    }
    render(){
        return(
            <>
                <div className='page1'>
                    <div>
                        <img src={jn} alt="" />
                    </div>
                    <div>
                        <p style={{width:"200px", backgroundColor:'blue', height:"100px"}}>{this.setState}</p>
                        <div className='grd'>
                            <div>
                                <button onClick={this.increment}>+</button>
                            </div>
                            <div>
                                <button onClick={this.decrement}>-</button>
                            </div>
                        </div>
                        <button>book tickets</button>
                    </div>
                </div>
            </>
        )
    }
}

export default InfoPage1;