import React, { useState} from 'react'
import {useNavigate} from 'react-router-dom'
import ic from '../assets/favicon-32x32.png'


const Feedback = ({sharedState, onStateChange}) => {

  const [selectedRating, setSelectedRating] = useState(null);
  
  
  const navigate = useNavigate(); 


  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    
    
     onStateChange(selectedRating);
     navigate('/success');

  }


 

  return (
   <div className="flex justify-center items-center h-screen bg-Very_Dark_Blue">
      <div className="bg-Dark_Blue p-8 text-white rounded-3xl">
            <div className='flex justify-center align-center  w-8 h-8 rounded-full bg-Sample '>
                  <svg className='mt-2' width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614" /></svg>
        </div> 

        <h1 className='text-White mt-4 text-2xl'>How did we do?</h1>
        <p className='text-Light_Grey mt-3'>Please let us know how we did with your support <br /> request.All feedback is appreciated to help us <br /> improve our offering! </p>
        
        <div className='flex mt-8'>
          {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          onClick={() => handleRatingSelect(rating)}
          className={`${
            selectedRating === rating ? 'bg-orange-500 text-White' : 'text-Light_Grey bg-Sample hover:bg-Light_Grey text-White transition duration-300'
          } h-12 w-12 rounded-full ml-[1.55rem]`}
        >
          {rating}
        </button>
      ))}
        </div>
     
        <div className='flex justify-center align-center '>
        <button onClick={selectedRating ? handleSubmit : ()=> alert("Please select a rating")}  className='bg-orange-500 text-white mt-8 p-[0.32rem] px-[10.5rem] rounded-full  hover:bg-White  hover:text-orange-500 transition duration-300'>Submit</button>
        </div>
        
      </div>
      
</div>
  )
}

export default Feedback