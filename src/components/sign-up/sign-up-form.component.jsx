import { useState } from "react";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import Button from "../button/button.component";
// import { UserContext } from "../contexts/user.context";

const defaultFormFields ={
    displayName: "",
    email: "",
    password: "",
    comfirmPassword: ""
}
const SignUpForm = () => {
        const [formFields,setformFields] = useState(defaultFormFields);
        const {displayName,email,password,comfirmPassword} = formFields;

        // console.log(formFields);
        //  console.log("hit");

        // const {setCurrentUser} = useContext(UserContext);

        const resetFormFields = () => {
            setformFields(defaultFormFields);
        }

        const handleSubmit = async (event) => {
         event.preventDefault();

         if(password !== comfirmPassword)
         {
            alert("password do not match");
            return;
         }
         try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            // setCurrentUser(user);
              await createUserDocumentFromAuth(user,{displayName});
              resetFormFields();
         }
        

         catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, email already in use');
            }else{
                console.log("user creation encountered an error",error);
            }

         }
        };

        const handleChange = (event) => {
              const {name,value} = event.target;
              setformFields({...formFields,[name]: value})
        }
    return (
       <div className="sign-up-container">
       <h2>Dont have an account ?</h2>
        <span>Sign up with Email and password</span>
        <form onSubmit={handleSubmit}>
            {/* <label >Display Name</label> */}
            <FormInput 
            label="Display Name" 
            type="text" 
            required 
            onChange={handleChange} 
            name="displayName" 
            value={displayName}/>

            
            <FormInput 
            label="Email" 
            type="email" 
            required 
            onChange={handleChange}  
            name="email" 
            value={email}/>
            
           
            <FormInput label="Password"  type="password" required onChange={handleChange} name="password" value={password}/>
            
            {/* <label>Comfirm Password</label> */}
            <FormInput label="Comfirm Password" type="password" required onChange={handleChange} name="comfirmPassword" value={comfirmPassword}/>

            <Button type="submit">Sign up</Button>
        </form>
       </div>
    );
}

export default SignUpForm;