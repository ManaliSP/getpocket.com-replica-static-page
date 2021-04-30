import './../../assets/css/middleBody.css';
import background from '../../assets/images/dancer.55decab57ea433e9f70fb55f52fd8542.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGoogle,
  } from "@fortawesome/free-brands-svg-icons";


function MiddleBody(){
    return(
        <div className="Middle-div" style={{ backgroundImage: `url(${background})` }}>
            <div className="Left-Middle-Div">
            </div>
            <div className="Righ-Middle-Div">
                <h2>Put knowledge in your Pocket.</h2>
                <button ><FontAwesomeIcon icon={faGoogle } size="1x " style={{ marginRight: '.8rem' }}/> Sign Up with Google</button>
                <button>Sign Up with Email</button>
                <h5>Already have an account?      Log In </h5>
                <h6>By signing up, you agree to Pocket’s Terms of Service and Privacy Policy.</h6>
            </div>
        </div>
    );
}
export default MiddleBody;
