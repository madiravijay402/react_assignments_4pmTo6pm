import React from 'react'

const UseEffects = () => {
  return (
    <>
        <div>
            <div>
                <h2>what is useEffect ?</h2>
                <ul>
                    <li>
                         <p>useEffect is react hook used for controlling the side effects of a webpage , it controls the unnecessary rendering of a webpaqge using dependancy array </p>
                    </li>
                    <li>
                        <p>
                            so when we use an useEffect the process of rendering has flow that flow is first component render then useEffect renders, if we use anyfunction inside it the function gets invoke if the function is linked to any state with help of event then that state gets update,and component gets rendered again 
                        </p>
                    </li>
                    <li>
                        we use it in fetching data,setting timers, running code after component runs 
                    </li>
                    <li>
                        so main advantage of this is if we dont use useffect when ever the components re-render the api,or related process runs again and again this will cause slow down the process,server load increases
                    </li>
                </ul>
               
            </div>
            <div>
                <b>
                    <h1>What is the difference between:</h1>
                <code>
                    {'useEffect(() => {})'}
                    <br />
                    {'useEffect(() => {}, [])'}
                    <br />
                    {'useEffect(() => {}, [value])'}
                </code>
                </b>
                <p>
                    <ul>
                        <li>
                            runs after every re-render
                        </li>
                        <li>
                            runs only once after once render
                        </li>
                        <li>
                            first render then when ever value changes it renders
                        </li>
                    </ul>
                </p>
            </div>
        </div>
    </>
  )
}

export default UseEffects