import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    // this.userLoginForm = this.userLoginForm.bind(this);
    // this.userSignupForm = this.userSignupForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.update = this.update.bind(this);
    // this.renderErrors = this.renderErrors.bind(this);
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

  breaks(){
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    )
  }

  render(){
    const userSignupForm = (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.breaks()}
            <h1  className='login-form-heading'>Welcome to Congo Basin!</h1>
            <br/>
            <h2 className='login-form-sub-heading'>
              Please {this.props.formType} or {this.props.navLink}
            </h2>            
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label className='login-label'>Name:
                <br />
                  <input type="text"
                    value={this.state.name}
                    onChange={this.update('name')}
                    className="login-input"
                  />
                <br />
              </label>
              <br />
              <label className='login-label'>Email:
                <br />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                <br />
              </label>
              <br />
              <label className='login-label'>Password:
                <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                <br/>
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    );
    const userLoginForm = (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.breaks()}
          <h1 className='login-form-heading'>Welcome to Congo Basin!</h1>
            <br/>
            <h2 className='login-form-sub-heading'>
              Please {this.props.formType} or {this.props.navLink}
            </h2>
            {this.renderErrors()}
            <div className="login-form">
              <br/>
              <label className='login-label'>Email:
                <br />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                <br/>
              </label>
              <br />
              <label className='login-label'>Password:
                <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                <br />
              </label>
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    );
    return this.props.formType === 'login' ? userLoginForm : userSignupForm;
  }
}

export default SessionForm;