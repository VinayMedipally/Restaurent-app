import hero from '../assets/hero.png'
import './Header.css'
const header=()=>{
    return (<div className="parent">
        <div className="left-container">
            <img className="hero-logo" src={hero} alt="" />
            </div>
        <div className='right-container'>
            <ul><li>Home</li><li>About</li><li>Contact</li><li>Profile</li></ul>
        </div>
        
         </div>)
}
export default header;