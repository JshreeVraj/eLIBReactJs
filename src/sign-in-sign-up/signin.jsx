import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {auth} from '../services/firebase';
import {signInWithGoogle} from '../services/firebase';
class SignInForm extends Component {
  state = { user: null }
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
      event.preventDefault();
  
      const {email, password } = this.state;
      try{
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      }catch(error){
        console.log(error);
        
      }
    };
  
    handleChange = event => {
      const { value, name } = event.target;
  
      this.setState({ [name]: value });
    };
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label">E-Mail Address</label>
                <input className="FormField__Input" 
                placeholder="Enter your email" 
                name="email" 
                type='email'
                defaultValue={this.state.email} 
                handleChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label">Password</label>
                <input className="FormField__Input" 
                placeholder="Enter your password" 
                name="password" 
                type="password" 
                defaultValue={this.state.password} 
                handleChange={this.handleChange} />
              </div>

              <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button> 
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
