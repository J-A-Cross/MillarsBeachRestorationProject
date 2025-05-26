import React from 'react';

const Ecological = () => {
  const pdfUrl = '/src/assets/1365.pdf'; 

  return (
    <div className="w-full flex flex-col items-center text-white">
      <div className="w-full bg-cover bg-center bg-no-repeat py-16 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">High Value Ecological Report</h1>
          <p className="text-base leading-relaxed max-w-xl mx-auto">
            Report summary paragraph about when it was conducted and what the document includes.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <iframe
          src={pdfUrl}
          className="w-[90%] max-w-[1200px] h-screen border border-gray-300"
          title="Ecological PDF"
        ></iframe>
      </div>
    </div>
  );
};

export default Ecological;
