import React, {useState} from 'react';

import './Login.css';

function initialState(){
  return{
    user: '',
    password: ''
  }
}

function Login( { user, password }) {
  //validar login
  console.log("Usuário: " + user)
  console.log("Senha: " + password)
}
const UserLogin = () =>{
  const [ values, setValues ] = useState(initialState)

  function onChange(event){
    const { value, name } = event.target
    setValues(values => ({...values, [name]: value}))
  }

  function onSubmit(event){
    event.preventDefault()
    Login(values)
    console.log("Voltei")
    setValues(initialState)
  }

  return(
    <div className='user-login'>
      <p>Acessar o sistema</p>
      <form onSubmit={onSubmit}>

      </form>
    </div>
  )

}
export default Login;
