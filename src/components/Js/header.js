import './../../assets/css/header.css';
function Header() {
    return (
      <div className="Header-div">
        <div className="Header-container">
          <div className="Pocket-div">
            <h3>Pocket</h3>
          </div>
          <div className="signInSignUp">
              <ul>
                  <li>Sign Up</li>
                  <li>How to Save</li>
                  <li>Go Premium</li>
                  <li>Support</li>
             <li><button >Log In</button></li>
              </ul>
          </div>
        </div>
        </div>
    );
  }
  export default Header;
