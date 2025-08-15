import React from 'react'

const STACK = ["Java", "C++", "Python", "JavaScript", "GitHub", "HTML", "React", "Node.js", "Linux"];

function Home() {
  return (
    <div className='stack-container'>
        <div className='stack-text'>
            <h2 id='h2-stack'>Technologies I Use</h2>
        </div>
        <div className='stack-items'>
            {STACK.map((item) => (
                <a>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Home