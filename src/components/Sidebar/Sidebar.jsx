import './Sidebar.css';
import { assets } from '../../assets/assets';
import { useState } from 'react';

export default function Sidebar() {
    const [extended, setExtended] = useState(false);


    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>

                {extended ?
                    <div className='recent'>
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <img src={assets.knowledge_icon} alt="" />
                            <p>Knowledge</p>
                        </div>
                    </div>
                    : null}
            </div>



            <div className="bottom">

                <div className="bottom-item recent-entry ">
                    <img className="avater" src={assets.user_icon} alt="" />
                    {extended ? <p>Profile</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}

                </div>
            </div>

        </div>
    )
}
