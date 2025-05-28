import React from 'react';
import './Posts.css';

const Posts = () => {

  return (
<div>
  <div className='items-center flex flex-col'>
  <h1 className="mx-15 py-15 text-4xl font-bold text-amber-50">Our Posts</h1>

  <div className="mx-15 my-5 flex h-auto md:flex-row rounded-2xl bg-green-800/80 text-white lg:w-4/5 flex-col items-center">
    <div className="m-5 flex h-full max-w-lg rounded-2xl">
      <img className="rounded-2xl h-full w-auto" src="traps.jpg" alt="Description of image" />
    </div>

    <div>
      <div className="mx-5 mt-5 flex flex-row flex-wrap">
        <h1 className="mx-2 font-semibold">Conservation Project</h1>
        <h3 className="mx-2">21st Febrary 2024</h3>
      </div>
      <div className="mx-5">
        <p className="mx-2">*Millars Beach, Stewart Isalnd NZ</p>
      </div>
      <p className="mx-7 mt-5 mb-8 pr-2">As part of trying to measure the impact of our ef
forts, we have set up 50x points (5x lines of 10 
points, each 100m apart) spread right across the 
whole property.  Once a year, in September, these 
points are fitted with Ink Pads and Chew Cards, 
which are then brought in after 3 nights and ana
lysed for rat, possum and other insect activity.  The 
attached photo shows clearly the difference in Sep
tember 2024, of the previous year’s efforts.  Lines A 
and B are in the area that was trapped and baited - 
Lines C, D and E were in areas not being trapped or 
baited. The contrast was quite stark and very en
couraging.   We have not been doing regular bird 
counts yet, but a plan is underway here.  Anecdotal
ly, we believe there are more bellbirds and keruru 
around than we’ve ever seen before.</p>
    </div>
  </div>

  <div className="mx-15 my-5 flex h-auto md:flex-row rounded-2xl bg-green-800/80 text-white lg:w-4/5 flex-col items-center">
    <div>
      <div className="mx-5 mt-5 flex flex-row flex-wrap">
        <h1 className="mx-2 font-semibold">Conservation Project</h1>
        <h3 className="mx-2">21st Febrary 2024</h3>
      </div>
      <div className="mx-5">
        <p className="mx-2">*Millars Beach, Stewart Isalnd NZ</p>
      </div>
      <p className="mx-7 mt-5 mb-8 pr-2">As a result of several opportunities (some face to face, some by zoom), we have connected with folk from 
several other projects, including Shane (the employed pest manager at The Neck), Sircet (the urban 
Stewart Is project), and Bluff Hill / Motupohue (a very well established project - David Swan there has 
been extremely helpful).  Overall we feel we are very much part of a community of people rolling their 
sleeves up and just getting on with trying to have a positive impact. </p>
    </div>
    <div className="m-5 flex h-full max-w-lg rounded-2xl">
      <img className="rounded-2xl h-auto w-full" src="whaler.jpeg" alt="Description of image" />
    </div>


  </div>

  <div className="mx-15 my-5 flex h-auto md:flex-row rounded-2xl bg-green-800/80 text-white lg:w-4/5 flex-col items-center">
    <div className="m-5 flex h-full max-w-lg rounded-2xl">
      <img className="rounded-2xl h-auto w-full" src="inlet.jpg" alt="Description of image" />
    </div>

    <div>
      <div className="mx-5 mt-5 flex flex-row flex-wrap">
        <h1 className="mx-2 font-semibold">Conservation Project</h1>
        <h3 className="mx-2">21st Febrary 2024</h3>
      </div>
      <div className="mx-5">
        <p className="mx-2">*Millars Beach, Stewart Isalnd NZ</p>
      </div>
      <p className="mx-7 mt-5 mb-8 pr-2">Routine Trapping and Baiting in Area 1 
Area 1 has a large number (approx. 60) single-kill devices (about 5x different types) plus about 18 self re
setting AT220s, along with about 80 bait tunnels. These have all been checked once a month since being 
established in Nov-December 2023, by a combination of James, and Andy/Jenni.  These are all on our 
TrapNZ platform, with all checks and catches noted to enable data analysis from time to time.  We no
ticed an increase in rats over this summer, which coincided with observations from other people in the 
Bay - a bit of a mast year, possibly encouraged by the extraordinary rata bloom we had. (The most bril
liant for many, many years, and stayed out for more than 6 weeks).   The most recent round we did was 
around the 25 of Feb 2025.</p>
    </div>
  </div>
</div>
</div>
  );
};

export default Posts;
