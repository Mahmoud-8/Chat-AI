import { assets } from '../../assets/assets';
import './Main.css';
import { useContext, useEffect, useRef } from 'react';
import { Context } from '../../context/Context';

export default function Main() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const resultRef = useRef(null); // Create a ref for the result container

  useEffect(() => {
    if (resultRef.current) {
      resultRef.current.scrollTop = resultRef.current.scrollHeight; // Scroll to the bottom
    }
  }, [resultData]); // Scroll whenever resultData changes

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSent(); // Trigger onSent function when Enter key is pressed
    }
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>Hepha logo</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Sebastian!</span></p>
              <p>How can I help you today?</p>
            </div>
            <p className='tagname'>Tools Ready to use</p>

            <div className="cards">
              <div className='card'>
                <p>Roadmap</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className='card'>
                <p>Create Strategy</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className='card'>
                <p>See Insights</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className='card'>
                <p>Goals/ Objection</p>
                <img src={assets.compass_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className='result' ref={resultRef}>
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data'>
              <img src={assets.knowledge_icon} alt="" />
              {loading ? (
                <div className='loader'>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress} // Add event listener for key press
              value={input}
              type="text"
              placeholder="Search tools..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={() => onSent()} src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Hepha AI Powered by Mesh Firm</p>
        </div>
      </div>
    </div>
  );
}
