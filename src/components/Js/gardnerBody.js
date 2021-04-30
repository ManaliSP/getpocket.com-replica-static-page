import './../../assets/css/gardnerBody.css';
import background from '../../assets/images/gardener.75c1df6cac26631dd7e3e0da697a7a41.png'

function GardenerBody(){
    return(
        <div className="Gardner-Div" style={{ backgroundImage: `url(${background})` }}>
            <h1>
            Start saving to Pocket.
            </h1>
            <div><button>Sign Up Now</button></div>
        </div>

    );
}
export default GardenerBody
