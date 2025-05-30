import './Donate.css'
import React from 'react';

const Donate = () => {
  return (
    <div className='min-h-400 items-center flex flex-col'>
      <div className="flex flex-col items-center w-full justify-center py-16 bg-cover bg-center bg-no-repeat bg-fixed bg-black-200  " style={{ backgroundImage: "url('/src/assets/blog.jpeg')" }}>
          <h1 className='font-extrabold text-white'>Donate Now!</h1>
          <h3 className='font-bold text-white'>Every donation made helps the effort to keep out area beutiful!</h3>
        </div>
        <div className='mx-20 flex items-center flex-col pt-10 sm:w-4/5 lg:w-3/5  '>
          <hr className='min-w-2/2'></hr>
        </div>
        <div className='mx-20 grid grid-col-1 md:grid-cols-2 gap-4 pt-10 lg:w-3/5'>
          <div className='m-6'>
          <ul className="list-disc">
              <li>Placeholder text about reasons to donate, why even small ammounts can go far, and the results achieved from previous donations</li>
            </ul>
          </div>
          <div className='m-6'>
        <ul className="list-disc">
              <li>Placeholder text about reasons to donate, why even small ammounts can go far, and the results achieved from previous donations</li>
            </ul>        </div>
          <div className='m-6'>
        <ul className="list-disc">
              <li>Placeholder text about reasons to donate, why even small ammounts can go far, and the results achieved from previous donations</li>
            </ul>        </div>
          <div className='m-6'>
        <ul className="list-disc">
              <li>Placeholder text about reasons to donate, why even small ammounts can go far, and the results achieved from previous donations  </li>
            </ul>        </div>
        </div>

        <div className='mx-20 flex items-center flex-col pt-10 sm:w-4/5 lg:w-3/5  '>
          <hr className='min-w-2/2'></hr>
          <p className='my-10'>Kindly accepting donations to the following account: 02-0924-02012-40-001</p>
          <hr className='min-w-2/2'></hr>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:px-20 md:px-0 py-10 lg:w-3/5  ">
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
