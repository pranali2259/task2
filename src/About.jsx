import React from 'react' 
 import './login.css'
const user={
    name:'Flower',
    imageUrl:'https://www.bing.com/th?id=OIP.Dkz7TKMPvGw8QA8gUk9hOAHaHJ&w=101&h=100&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2',
    ImageSize:90,
}
//functional component
const Greeting=({text})=>{
    return <p>{text}</p>
}
//class component
class Welcome extends React.Component{
  render(){
    return <h1>hello Welcome</h1>
  }
}
function Loginform(){
    return(
    <body> 
    <fieldset style={{
        marginRight:'350px'
    }}> 
   <legend> user login </legend>
   <form class="form">
<span class="input-span">
 <label for="email" class="label">Email</label>
 <input type="email" name="email" id="email"
/></span>
<span class="input-span">
 <label for="password" class="label">Password</label>
 <input type="password" name="password" id="password"
/></span>
<span class="span"><a href="#">Forgot password?</a></span>
<input class="submit" type="submit" value="Log in" />
<span class="span">Don't have an account? <a href="#">Sign up</a></span>
</form>
</fieldset>
</body> )
}
const About = () => {
  return (
    <> 
    <div style={{
        textAlign:'center'
    }}>
      <h1>{user.name}</h1>
      <img className='avatar' src={user.imageUrl} alt={'photo of '+ user.name} 
      style={{
        width:user.ImageSize,
        height:user.ImageSize
      }}/>
    <Greeting text=" hello"/>
    <Greeting text="h11"/>
    <Welcome />
    </div>
    <Loginform/>
    </>
  )
}

export default About
