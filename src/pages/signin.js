import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as ROUTES from '../constants/routes';

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmailAdress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password === '' || emailAdress === '';

  const handleSignIn = (e) => {
      e.preventDefault();

      firebase
        .auth()
        .signInWithEmailAndPassword(emailAdress, password)
        .then(() =>{
          history.push(ROUTES.BROWSE)
        })
          .catch((error) => {
            setEmailAdress('');
            setPassword('');
            setError(error.message);
          });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              value={emailAdress}
              onChange={({ target }) => setEmailAdress(target.value)}
            ></Form.Input>
            <Form.Input
              type="password"
              autocomplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            ></Form.Input>
            <Form.Submit disabled={isInvalid} type="submit">
              Sign in
            </Form.Submit>
          </Form.Base>
          <Form.Text>
             New to Netflix? <Form.Link to="/signup">Sign Up</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA  to ensure you're not a bot. Learn More
          </Form.TextSmall>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
