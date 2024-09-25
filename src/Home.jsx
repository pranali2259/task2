import React from 'react'

const Home = () => {
    const title="Counter"
    const like=0;
    return (
      <div>
        <p style={{
            textAlign:'center',
            color:'black',
            fontSize:'40px'
        }}>{title}</p>
        <h1 id='demo1' style={{
            textAlign:'center',
            fontSize:'40px'
        }}>{like}</h1>
        <Counter />
        <h1 id='demo' style={{
            color:'red',
            textAlign:'center'
        }}>Welcome to home</h1>
        <MyButton />
      </div>
    );
  }
  function Counter(){
    let count=0;
    const increment=()=>{
        document.getElementById('demo1').innerHTML=' '+count++;
      }
      const dicrement=()=>{
        document.getElementById('demo1').innerHTML=' '+count--;
      }
      const reset=()=>{
        count=count*0;
    document.getElementById('demo1').innerHTML=' '+count;
      }
      return(
<>
<div style={{
    textAlign:'center',
    marginTop:'50px',
    marginBottom:'150px'
}}> 
<button onClick={increment}>+</button>
        <button onClick={reset}>reset</button>
        <button onClick={dicrement}>-</button>
        </div>
</>

      )
  }

  function MyButton() {
    const myFun = () => {
        document.getElementById('demo').style.color='green';
       document.getElementById('demo').innerHTML = "Content changed!";
    };
   
    return (
        <>
        <div style={{
            textAlign:'center'
        }}> 
      <button onClick={myFun} >
        Submit
      </button>
      </div>
      </>
    );
  }

export default Home
