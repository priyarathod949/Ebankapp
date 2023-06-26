import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginContainer,
  LoginCardContainer,
  LoginImage,
  LoginFormContainer,
  LoginHeading,
  InputLabel,
  Input,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {username: '', password: '', loginError: '', errorMsg: ''}

  onChangeUserId = event => {
    this.setState({username: event.target.value})
  }

  onChangePin = event => {
    this.setState({password: event.target.value})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  loginFailure = errorMessage => {
    this.setState({loginError: true, errorMsg: errorMessage})
  }

  loginRequest = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/ebank/login'
    const userData = {user_id: username, pin: password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, loginError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <LoginCardContainer>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
          />
          <LoginFormContainer onSubmit={this.loginRequest}>
            <LoginHeading>Welcome Back!</LoginHeading>
            <InputLabel htmlFor="username">User ID</InputLabel>
            <Input
              type="text"
              value={username}
              placeholder="Enter User ID"
              onChange={this.onChangeUserId}
              id="username"
            />
            <InputLabel htmlFor="password">PIN</InputLabel>
            <Input
              type="password"
              value={password}
              placeholder="Enter PIN"
              onChange={this.onChangePin}
              id="password"
            />
            <LoginButton type="submit">Login</LoginButton>
            {loginError ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginContainer>
    )
  }
}

export default Login
