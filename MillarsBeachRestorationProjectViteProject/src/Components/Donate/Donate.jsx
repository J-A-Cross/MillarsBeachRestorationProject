import './Donate.css'
import React from 'react';
import Fern from "/src/assets/fern.jpg" 

const Donate = () => {
  return (
    <div className='bg-gray-300 min-h-400'>
    <div className="flex flex-col items-center justify-center py-16 bg-cover bg-center bg-no-repeat bg-fixed bg-black-200"
     style={{ backgroundImage: "url('/src/assets/fern.jpg')" }}>
        <h1 className='font-extrabold text-white'>Donate Now!</h1>
        <h3 className='font-bold text-white'>Every donation made helps the effort to keep out area beutiful!</h3>
      </div>
      <div className='mx-20 flex items-center flex-col pt-10'>
        <hr className='min-w-2/2'></hr>
      </div>
      <div className='mx-20 grid grid-cols-2 gap-4 pt-10'>
        <div className='m-6'>
        <ul className="list-disc">
            <li>Donations can be used towards enhancing the experiance of wildlife around the beach and surrounding areas.</li>
          </ul>
        </div>
        <div className='m-6'>
      <ul className="list-disc">
            <li>Donations can be used towards enhancing the experiance of wildlife around the beach and surrounding areas.</li>
          </ul>        </div>
        <div className='m-6'>
      <ul className="list-disc">
            <li>Donations can be used towards enhancing the experiance of wildlife around the beach and surrounding areas.</li>
          </ul>        </div>
        <div className='m-6'>
      <ul className="list-disc">
            <li>Donations can be used towards enhancing the experiance of wildlife around the beach and surrounding areas.</li>
          </ul>        </div>
      </div>

      <div className='mx-20 flex items-center flex-col pt-20'>
        <hr className='min-w-2/2'></hr>
        <p className='my-10'>Kindly accepting donations to the following account: 06-0851-0442560-00</p>
        <hr className='min-w-2/2'></hr>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-20 py-10">
        <img src={"/src/assets/blog.jpeg"} alt="Photo 1" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/contactBackground.jpg" alt="Photo 2" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/fern.jpg" alt="Photo 3" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/homeBackground.jpeg" alt="Photo 4" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/signInBackground.jpg" alt="Photo 5" className="w-full h-48 object-cover rounded-" />
        <img src={"/src/assets/blog.jpeg"} alt="Photo 1" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/contactBackground.jpg" alt="Photo 2" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/fern.jpg" alt="Photo 3" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/homeBackground.jpeg" alt="Photo 4" className="w-full h-48 object-cover rounded-md" />
        <img src="/src/assets/signInBackground.jpg" alt="Photo 5" className="w-full h-48 object-cover rounded-" /> 
      </div>

      
    </div>
  );
};

export default Donate;
