import React from 'react';

export const LoginButton = () => {
  return <button>Login</button>
}

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    };

  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render(){
    return(
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <h2>Sign-In</h2>
          <div className='login-form'>
            <label>Email
              <br />
              <input type="text" 
                value={this.state.email}
                onChange={this.update('email')}
                className='login-input' />
            </label>
            <br />
            <br />
            <label>Password
              <br />
              <input type="password" 
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input' />
            </label>
            <br />
            <br />
            <button type="submit" value={this.props.formType} className='session-submit'>Sign-In</button>
          </div>
        </form>
      </div>
    )
  }
  
};

export default LoginForm;