import React, {useState} from 'react';
import axios from 'axios';



const Login = () => {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axios.post(`http://localhost:5001/api/login`, this.state.credentials)
    .then(res => {
      console.log(res)
      localStorage.setItem("token", res.data.token)
      this.props.history.push("/protected")
    })
    .catch(err => console.log(err))
  };

  render() {
    return (
            (<div>
              <h2>Login</h2>
            <form>
              <label htmlFor ="username">username </label>
              <input onChange={handleChange} name="username" id="username"> </input>
        
              <label htmlFor ="password">password </label>
              <input onChange={handleChange} type="password" name="password" id="password"> </input>
        
              <button>Submit</button>
            </form>
        
            </div>)
    
    );
  }
}

export default Login;