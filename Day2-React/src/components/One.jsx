import React from 'react'
import jn2 from "../assets/jn2.avif"
import title from "../assets/titlef.png"
function One() {
  return (
    <>

    <div className='grd'>
        <div className='page1'>
        <img src={jn2} alt="" />
        </div>
        <div className="col" style={{textAlign:'center'}}>
          <div>
             <img src={title} alt="" />
          </div>
          <div>
            <h2 className='ft'>ONE LAST TIME</h2>
          </div>
        </div>
    </div>
    </>
    
  )
}

export default One