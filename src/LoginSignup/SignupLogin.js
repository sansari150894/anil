import React, {Component} from "react";
import {Button,Checkbox,Form} from "semantic-ui-react";
import Divider from "semantic-ui-react/dist/commonjs/elements/Divider/Divider";
import "../Styles/SignupLogin.css";

class SignupLogin extends Component {
  render() {
    return (
      <div className = "Signup-Login-Container" >
        <div className="Signup-Container"> < Signup / > < /div>
      <div className="Separator"></div>
        <div className="Login-Container">   <Login / > < /div>

      </div>
    );
  }
}

const Signup = () => {
  return (
    <div>
      <h2>Signup here</h2>
      < Form >
        <Form.Field >
          <label style={labelStyle}> Name < /label>
          <input placeholder = "John Deo" / >
        </Form.Field>
        <Form.Field >
          <label style={labelStyle}> Mobile Number < /label>
          <input placeholder = "9310959435" / >
        </Form.Field>
        <Form.Field >
          <label style={labelStyle}> Email < /label>
          <Form.Input placeholder = "joe@schmoe.com" / >
        </Form.Field>
        <Form.Field >
          <label style={labelStyle}> Password < /label>
          <Form.Input / >
        </Form.Field>
        <Form.Field >
          <label style={labelStyle}> Confirm Password < /label>
          <Form.Input / >
        </Form.Field>
        <Button type = "submit" > Submit < /Button>
      < /Form >
    </div>
  );
};
const Login = () => {
  return (
    <div>
    <h2>Login here</h2>
    <Form >
    <Form.Field >
      <label style={labelStyle}> Email < /label>
      <Form.Input placeholder = "joe@schmoe.com" / >
    </Form.Field>
    <Form.Field >
      <label style={labelStyle}> Password < /label>
      <Form.Input / >
    </Form.Field>
      <Button type = "submit" > Submit < /Button>
    < /Form >
    </div>

  );
};

const labelStyle = {
  textAlign: 'left'
};
export default SignupLogin;
