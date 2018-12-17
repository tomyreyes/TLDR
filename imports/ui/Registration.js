import React, { Component } from 'react'
import FormValidator from '../utils/FormValidator'

class Registration extends Component {
  constructor() {
    super()
    this.validator = new FormValidator([
      {
        field: 'email',
        method: 'isEmpty',
        validWhen: false,
        message: 'Email is required.'
      },
      {
        field: 'email',
        method: 'isEmail',
        validWhen: true,
        message: 'That is not a valid email.'
      },
      {
        field: 'password',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password is required.'
      },
      {
        field: 'password_confirmation',
        method: 'isEmpty',
        validWhen: false,
        message: 'Password confirmation is required.'
      },
      {
        field: 'password_confirmation',
        method: this.passwordMatch, // notice that we are passing a custom function here
        validWhen: true,
        message: 'Password and password confirmation do not match.'
      }
    ])

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      validation: this.validator.valid()
    }

    this.submitted = false
  }

  passwordMatch = (confirmation, state) => state.password === confirmation

  handleInputChange = event => {
    event.preventDefault()

    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    const validation = this.validator.validate(this.state)
    this.setState({ validation })
    this.submitted = true

    if (validation.isValid) {
      alert('now valid')
      // handle actual form submission here
    }
  }
  render() {
    let validation = this.submitted // if the form has been submitted at least once
      ? this.validator.validate(this.state) // then check validity every time we render
      : this.state.validation // otherwise just use what's in state

    return (
      <div className="content overflow-hidden">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="block block-themed animated fadeIn">
              <div className="block-header bg-success">
                <ul className="block-options">
                  <li>
                    <a href="#" data-toggle="modal" data-target="#modal-terms">
                      View Terms
                    </a>
                  </li>
                  <li>
                    <a
                      href="base_pages_login.html"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Log In"
                    >
                      <i className="si si-login" />
                    </a>
                  </li>
                </ul>
                <h3 className="block-title">Register</h3>
              </div>
              <div className="block-content block-content-full block-content-narrow">
                <h1 className="h2 font-w600 push-30-t push-5">OneUI</h1>
                <p>
                  Please fill the following details to create a new account.
                </p>

                <form
                  className="js-validation-register form-horizontal push-50-t push-50"
                  action="base_pages_register.html"
                  method="post"
                >
                  <div className="form-group">
                    <div className="col-xs-12">
                      <div className="form-material form-material-success">
                        <input
                          className="form-control"
                          type="text"
                          id="register-username"
                          name="register-username"
                          placeholder="Please enter a username"
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="register-username">Username</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <div
                        className={
                          !validation.email.isInvalid
                            ? 'form-material form-material-success'
                            : ' form-material has-error'
                        }
                      >
                        <input
                          className="form-control"
                          type="email"
                          id="register-email"
                          name="email"
                          placeholder="Please provide your email"
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="email">Email</label>
                        <span className="help-block text-right">
                          {validation.email.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <div
                        className={
                          !validation.password.isInvalid
                            ? 'form-material form-material-success'
                            : ' form-material has-error'
                        }
                      >
                        <input
                          className="form-control"
                          type="password"
                          id="register-password"
                          name="password"
                          placeholder="Choose a strong password.."
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="password">Password</label>
                        <span className="help-block text-right">
                          {validation.password.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <div
                        className={
                          !validation.password_confirmation.isInvalid
                            ? 'form-material form-material-success'
                            : ' form-material has-error'
                        }
                      >
                        <input
                          className="form-control"
                          type="password"
                          id="register-password2"
                          name="password_confirmation"
                          placeholder="..and confirm it"
                          onChange={this.handleInputChange}
                        />
                        <label htmlFor="password_confirmation">
                          Confirm Password
                        </label>
                        <span className="help-block text-right">
                          {validation.password_confirmation.message}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12">
                      <label className="css-input switch switch-sm switch-success">
                        <input
                          type="checkbox"
                          id="register-terms"
                          name="register-terms"
                          onChange={this.handleInputChange}
                        />
                        <span /> I agree with terms &amp; conditions
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-12 col-sm-6 col-md-5">
                      <button
                        className="btn btn-block btn-success"
                        onClick={this.handleFormSubmit}
                      >
                        <i className="fa fa-plus pull-right" /> Sign Up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Registration
