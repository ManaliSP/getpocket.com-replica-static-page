import './../../assets/css/appStore.css';
import google from './../../assets/images/google-play-badge.cd2d58262632de4c42f7054779bf3f9d.svg';
import app from './../../assets/images/app-store-badge.ee8fc18225c5b13e0dbdd0b4143f4ecf.svg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";

function AppStore(){
    return(
        <div className='Main-div'>
            <div className='leftpane'>
            <img src={app} alt="" height="30px"></img>
            <img src={google} alt="" height="30px"></img>
            </div>
            <div className='middlepane'>
            <div className='vl1'>
                <h3>“It’s revolutionised the way
                I read industry news on the go.
                I'm in love”</h3>
                <h4><FontAwesomeIcon icon={faTwitter } size="1x"/>@elliebudd_</h4>
                </div>

            </div>
            <div className='rightpane'>
            <div className='vl2'>
                <h1>10X</h1>
                <h2>Webby Award Winner</h2>
                </div>
            </div>
        </div>
    );
}
export default AppStore
