import React from 'react'

function Theory() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>React Class Components Overview</h1>

      <section>
        <h2>1. What is a Class Component in React?</h2>
        <p>A Class Component is a React component written using an ES6 class.</p>
        <p>It must extend <code>React.Component</code> and contain a <code>render()</code> method.</p>
        <p>It is mainly used when we need:</p>
        <ul>
          <li>State</li>
          <li>Lifecycle methods</li>
        </ul>

        <p>Here:</p>
        <ul>
          <li><strong>Welcome</strong> → Class Component</li>
          <li><strong>render()</strong> → returns JSX</li>
        </ul>
      </section>

      <section>
        <h2>2. How to Create a Class Component</h2>
        <ol>
          <li>Import React and Component</li>
          <li>Create class</li>
          <li>Extend Component</li>
          <li>Add <code>render()</code> method</li>
          <li>Return JSX</li>
        </ol>

      </section>

      <section>
        <h2>3. What is State?</h2>
        <p>State = Data stored inside a component that can change.</p>
        <p>When state changes → Component re-renders.</p>

        <p>Here <code>count</code> is state.</p>
      </section>

      <section>
        <h2>4. setState() Process</h2>
        <p>We never change state directly.</p>
        <p> Wrong:</p>

        <p>Correct:</p>

        <p>Process:</p>
        <ol>
          <li>User action (click button)</li>
          <li><code>setState()</code> is called</li>
          <li>React updates state</li>
          <li>Component re-renders</li>
        </ol>
      </section>

      <section>
        <h2>5. Lifecycle Methods</h2>
        <p>React Class Components have 3 phases.</p>
        <h3>Mounting (Component created)</h3>
        <ul>
          <li><code>constructor()</code></li>
          <li><code>render()</code></li>
          <li><code>componentDidMount()</code></li>
        </ul>

        <p>Used for:</p>
        <ul>
          <li>API calls</li>
          <li>timers</li>
          <li>data fetching</li>
        </ul>

        <h3>Updating (State or Props change)</h3>
        <ul>
          <li><code>shouldComponentUpdate()</code></li>
          <li><code>componentDidUpdate()</code></li>
        </ul>

        <p>Runs when:</p>
        <ul>
          <li><code>setState()</code> happens</li>
          <li>props change</li>
        </ul>

        <h3>Unmounting (Component removed)</h3>
        <ul>
          <li><code>componentWillUnmount()</code></li>
        </ul>

        <p>Used for:</p>
        <ul>
          <li>clearing timers</li>
          <li>cancel API calls</li>
        </ul>
      </section>

      <section>
        <h2>6. Real Example with Button</h2>

        <p>Output:</p>
        <p>Count: 0 [Increase Button] Click → Count increases.</p>
      </section>

      <section>
        <h2>7. What Happens Without Button?</h2>

        <p>State never changes, so UI always shows same value.</p>
      </section>

      <section>
        <h2>8. What Happens Without setState()?</h2>

        <p>React does not re-render, so UI won't update. React only re-renders when <code>setState()</code> is used.</p>
      </section>

      <section>
        <h2>9. What is constructor() in React Class Component?</h2>
        <p><code>constructor()</code> is a special method in JavaScript classes.</p>
        <p>It runs first when the component is created. Used for:</p>
        <ul>
          <li>initializing state</li>
        </ul>
      </section>

      <section>
        <h2>10. Binding Methods &amp; Constructor Use</h2>
        <p>In older React versions, the constructor was used to bind methods and set initial state.</p>

        <p>We also use constructors to initialize state:</p>

      </section>

      <section>
        <h2>11. Important Note (Modern React)</h2>
        <p>Most developers now prefer functional components with Hooks.</p>

      </section>
    </div>
  )
}

export default Theory;
