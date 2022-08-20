import { Fragment,useContext} from "react";
import { Outlet ,Link} from "react-router-dom";
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";

import { UserContext } from "../../components/contexts/user.context";
import { CardContext } from "../../components/context/card-context.component";

import { signOutUser } from "../../utils/firebase/firebase.utils";
import './Navigation.styles.scss';


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
       <div className="navigation">
       <Link className="logo-container" to="/">
          <CrwnLogo className='logo'/>
       </Link>
       <div className="nav-links-container">
             <Link className="nav-link " to='/shop'>
                  SHOP
             </Link>
             {
             currentUser ? (
             <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
              ) : (
              <Link className="nav-link " to='/auth'>
                  Sign In
               </Link>  
        )
       }
       <CardIcon/>
         </div>
         {isCardOpen && <CardDropdown/>}
       </div>
       <Outlet/>
     </Fragment>
    );
 }
export default Navigation;