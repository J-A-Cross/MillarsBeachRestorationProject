import React, { useState } from 'react';

const Newsletter = () => {
  const pdfs = [
    { name: '2025: January-March', url: 'MillarsRestorationProjectNewsletterSupporters.pdf' },
    { name: '2024: October-December', url: 'MillarsRestorationProjectNewsletterSupporters2.pdf' },
    { name: '2024: July-September', url: 'MillarsRestorationProjectNewsletterSupporters.pdf' },
    { name: '2024: April-June', url: 'MillarsRestorationProjectNewsletterSupporters.pdf' },
  ];

  const [selectedPdf, setSelectedPdf] = useState(pdfs[0].url);

  return (
    <div className="min-h-screen pb-40 p-6 lg:max-w-3/5 mx-auto space-y-10/>">
      {/* PDF Selector */}
      <div>
        <div className='mb-6 flex flex-col items-center'>
             <h1 className="text-3xl font-semibold mb-4">Welcome to the Millar Beach Restoration Project Newsletter Viewer!</h1>
            <div className="flex gap-4 flex-wrap mb-6 flex-row justify-center">
            {pdfs.map((pdf, index) => (
                <button
                key={index}
                onClick={() => setSelectedPdf(pdf.url)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded shadow"
                >
                {pdf.name}
                </button>
            ))}          
            </div>
        </div>
        <div className="border rounded shadow overflow-hidden h-[90vh]">
          <iframe
            src={selectedPdf}
            title="PDF Viewer"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Fixed Footer Newsletter Form */}
      <footer className="fixed bottom-0 left-0 w-full bg-black border-t shadow z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center">
          <h2 className="text-xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <form className="flex flex-col sm:flex-row justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="border px-4 py-2 rounded shadow w-full sm:w-72"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 shadow w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Newsletter;
