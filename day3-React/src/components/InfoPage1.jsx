import {component} from 'react';
import jn from '../assets/jn1.jpg'
class InfoPage1 extends component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
                <div className='page1'>
                    <div>
                        <img src={jn} alt="" />
                    </div>
                    <div>
                        <p></p>
                        <div className='button'>
                            <div>
                                <button>+</button>
                            </div>
                            <div>
                                <button>-</button>
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