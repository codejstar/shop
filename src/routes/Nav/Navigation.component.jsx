import { Fragment,useContext} from "react";
import { Outlet ,Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { UserContext } from "../../components/contexts/user.context";
import { CardContext } from "../../components/context/card-context.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import {  
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
   } from './Navigation.styles';


const Navigation = () =>{
      const {currentUser} = useContext(UserContext);
      // console.log(currentUser);
      const {isCardOpen} = useContext(CardContext)

  
  // const signOutHandler = async () => {
  //       await signOutUser();
  //       setCurrentUser(null);
  // }

  
    return (
     <Fragment>
     <NavigationContainer>
       <LogoContainer to="/">
          <CrwnLogo className='logo'/>
       </LogoContainer>

       <NavLinks>
             <NavLink to='/shop'>
                  SHOP
             </NavLink>
             {
             currentUser ? (
             <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
              ) : (
              <NavLink to='/auth'>
                  Sign In
               </NavLink>  
        )
       }
       <CardIcon/>
         </NavLinks>
         {isCardOpen && <CardDropdown/>}
     </NavigationContainer>
       <Outlet/>
     </Fragment>
    );
 }
export default Navigation;