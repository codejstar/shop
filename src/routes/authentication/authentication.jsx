import React from 'react'
// import {signInWithGooglePopup,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils.js";
import SignUpForm from "../../components/sign-up/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in/sign-in-form.component.jsx";
import './authentication.styles.scss';

const Authentication = () => {
  // const  logGoogleUser = async () =>{
  //   const {user} = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // }
      return (
        <div className="authentication-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
      );
}
export default Authentication;