import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../services/firebase';
class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      regno:'',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        regno:'',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

    render() {
      const { displayName, regno, email, password, confirmPassword } = this.state;
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label">Display Name</label>
                <input className="FormField__Input" 
                placeholder="Enter your name" 
                name="displayName" 
                type="text"
                defaultValue={displayName} 
                onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Register Number</label>
                <input className="FormField__Input"
                 placeholder="Enter your register number" 
                 name="regno" 
                 type="number" 
                 defaultValue={regno} 
                 onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label">E-Mail Address</label>
                <input className="FormField__Input" 
                placeholder="Enter your email" 
                name="email" 
                type="email" 
                defaultValue={email} 
                onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Password</label>
                <input className="FormField__Input" 
                placeholder="Enter your password" 
                name="password" 
                type="password" 
                defaultValue={password} 
                onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label">Password</label>
                <input className="FormField__Input" 
                placeholder="Confirm password" 
                name="confirmPassword" 
                type="password" 
                defaultValue={confirmPassword} 
                onChange={this.handleChange} />
              </div>
              <button className="FormField__Button mr-20">Sign Up</button> 
            </form>
          </div>
        );
    }
}

export default SignUpForm;
