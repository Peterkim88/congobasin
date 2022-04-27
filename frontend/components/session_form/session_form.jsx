import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
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

  renderErrors(){
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  userLoginForm = () => {
    <div className="login-form-container">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to Congo Basin!
        <br/>
        Please {this.props.formType} or {this.props.navLink}
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
      </form>
    </div>
  }

  userSignupForm = () => {
    <div className="login-form-container">
      <form onSubmit={this.handleSubmit} className="login-form-box">
        Welcome to Congo Basin!
        <br/>
        Please {this.props.formType} or {this.props.navLink}
        {this.renderErrors()}
        <div className="login-form">
          <br/>
          <label>Name:
            <input type="text"
              value={this.state.name}
              onChange={this.update('name')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
            />
          </label>
          <br/>
          <label>Password:
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
          </label>
          <br/>
          <input className="session-submit" type="submit" value={this.props.formType} />
        </div>
      </form>
    </div>
  }

  render(){
    return this.props.formType === 'login' ? userLogin() : userSignup();
  }
}

export default SessionForm;