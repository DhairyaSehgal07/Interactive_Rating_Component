import React, { useState } from 'react'
import Feedback from './components/Feedback'
import {Route , Routes} from 'react-router-dom'
import ThankYou from './components/ThankYou'


const App = () => {
  
  const [sharedState, setSharedState] = useState('');

  const handleStateChange = (newState) => {
    setSharedState(newState);
  };


  return (
    <div>
      <Routes>
        <Route path='/' element={<Feedback sharedState={sharedState} onStateChange={handleStateChange}/>} />
        <Route path='/success' element={<ThankYou sharedState={sharedState} />} />
      
      </Routes>
  
    </div>
  )
}

export default App