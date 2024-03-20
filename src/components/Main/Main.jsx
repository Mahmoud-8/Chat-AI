import { assets } from '../../assets/assets';
import './Main.css';

export default function Main() {
  return (
    <div className='main'>
        <div className="nav">
            <p>Hepha logo</p>
            <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Sebastian!</span></p>
                    <p>How I can Help you today?</p>
                </div>
                <p>Tools Ready to use</p>

                <div className="cards">
                <div className='card'>
                        <p>Roadmap</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>  
                      <div className='card'>
                        <p>Create Strategy</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>   
                     <div className='card'>
                        <p>See Insights</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className='card'>
                        <p>Goals/ Objection</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                </div>
            </div>


    </div>
  )
}
