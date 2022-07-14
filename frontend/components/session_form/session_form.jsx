import React from 'react';

class SessionForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.userLoginForm = this.userLoginForm.bind(this);
    this.userSignupForm = this.userSignupForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleDemo = this.handleDemo(this);
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

  // handleDemo(e){
  //   e.preventDefault();
  //   const user = {
  //     email: 'demo@demo.com',
  //     password: 'demodemo'
  //   }
  //   this.props.processForm(user);
  // }

  renderErrors(){
    return (
      <ul className='session-errors'>
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
  
  userSignupForm(){
    const userSignupForm = (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            {this.breaks()}
            <h1  className='login-form-heading'>Welcome to Congo Basin!</h1>
            <br/>
            <h2 className='login-form-sub-heading'>
              Please {this.props.formType} or {this.props.navLink}
            </h2>            
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
              {this.renderErrors()}
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    );
    return userSignupForm;
  }

  userLoginForm(){
    const userLoginForm = (
      <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
          {this.breaks()}
          <h1 className='login-form-heading'>Welcome to Congo Basin!</h1>
            <br/>
            <h2 className='login-form-sub-heading'>
              Please {this.props.formType} or {this.props.navLink}
            </h2>
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
              {this.renderErrors()}
              <br />
              <input className="session-submit" type="submit" value={this.props.formType} />
            </div>
          </form>
              {/* <button onClick={(e) => this.handleDemo(e)}>Try Demo</button> */}
        </div>
    );
    return userLoginForm;
  }

  render(){
    if (this.props.formType === 'login'){
      return this.userLoginForm();
    } else if (this.props.formType === 'signup') {
      return this.userSignupForm();
    }
  }
}

export default SessionForm;