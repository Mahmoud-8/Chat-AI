import { assets } from '../../assets/assets';
import './Main.css';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Main() {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);




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
                <p className='tagname'>Tools Ready to use</p>

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
                <div className="main-bottom">
                  <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Search tools..." />
                    <div>
                      <img src={assets.gallery_icon} alt=""/>
                      <img src={assets.mic_icon} alt="" />
                      <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                    </div>
                  </div>
                  <p className="bottom-info"> Hepha AI Powered by Mesh Firm</p>
                </div>
            </div>
    </div>
  )
}
