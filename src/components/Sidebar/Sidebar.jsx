import'./Sidebar.css';
import { assets } from '../../assets/assets';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="top">   
                logo
                <img className='menu' src={assets.bulb_icon} alt="" />
            </div>
            <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    <p>New Chat</p>
                </div>
            

            <div className="top">   
                <img className='menu' src={assets.menu_icon} alt="" />
               
                <div className='recent'>
                    <p className="recent-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.knowledge_icon} alt="" />
                        <p>Knowledge</p>
                    </div>
                </div>
            </div>


            <div className="bottom">

            <div className="bottom-item recent-entry">
                    <img src={assets.user_icon} alt="" />
                    <p>Profile</p>
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    <p>Settings</p>
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    <p>Help</p>

                </div>
          </div>
            
        </div>
    )
}
