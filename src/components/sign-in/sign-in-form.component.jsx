import { useState } from "react";
import { signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  // createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import './sign-in.styles.scss';
import Button from "../button/button.component";

// import { UserContext } from "../contexts/user.context";

const defaultFormFields ={
    email: "",
    password: "",
};
const SignInForm = () => {
        const [formFields,setformFields] = useState(defaultFormFields);
        const {email,password,} = formFields;

        // console.log(formFields);


        // const {setCurrentUser} = useContext(UserContext);
          
        const resetFormFields = () => {
            setformFields(defaultFormFields);
        }

          const  signInWithGoogle = async () =>{
             await signInWithGooglePopup();
          // setCurrentUser(user);
          // createUserDocumentFromAuth(user);
          }

        const handleSubmit = async (event) => {
         event.preventDefault();

         try{
            await signInAuthUserWithEmailAndPassword(
              email,
              password);
            //  setCurrentUser(user);
              resetFormFields();
         }
         catch(error){   
         switch(error.code)
         {
          case 'auth/wrong-password':
            alert("incorrect password for email");
            break;

            case 'auth/user-not-found':
              alert("no user associate with this email");
              break;

              default:
              console.log(error);
         }
        //  if(error.code === 'auth/wrong-password'){
        //       alert('wrong password');
        //  }
        //  console.log(error);
         }
        };

        const handleChange = (event) => {
              const {name,value} = event.target;
              setformFields({...formFields,[name]: value})
        }
    return (
       <div className="sign-up-container">
       <h2>Already have an account ?</h2>
        <span>Sign in with Email and password</span>
        <form onSubmit={handleSubmit}>
            {/* <label >Display Name</label> */}
            
            <FormInput 
            label="Email" 
            type="email" 
            required 
            onChange={handleChange}  
            name="email" 
            value={email}/>
            
           
            <FormInput label="Password"  
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}/>
            
            {/* <label>Comfirm Password</label> */}

            <div className="buttons-container">
               <Button type="submit">SIGN IN</Button>
              <Button type="button" buttonType='google' onClick={signInWithGoogle}>GOOGLE SIGN IN</Button>
            </div>
        </form>
       </div>
    );
}

export default SignInForm;