import './../../assets/css/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
  } from "@fortawesome/free-brands-svg-icons";
function Footer(){
    return(
        <div className="footer-div">
            <ul>
                <li>Blog</li>
                <li>About</li>
                <li>Explore</li>
                <li>Publishers</li>
                <li>Developers</li>
                <li>Terms of Service</li>
                <li>Privacy</li>
                <li>Support</li>
                <li>Jobs</li>
            </ul>
            <div class="social-container">
            <FontAwesomeIcon icon={faTwitter } size="2x" style={{ marginRight: '.8rem' }}/>
            <FontAwesomeIcon icon={faFacebook} size="2x" />
</div>
            <div id="footer">
   <p>© 2019 Read It Later, Inc</p>
</div>
        </div>
    );
}
export default Footer;
