import React from "react";

const History = () => {
  return (
    <>
      <div
        // className={`relative min-h-screen bg-[url('https://3.bp.blogspot.com/_dFHgYO4fOVk/S4LXrpqQ-JI/AAAAAAAAAA0/-Nh2V4Xv0dE/s1600/FILE0561.JPG')] bg-cover bg-top bg-fixed`}
        // className={`relative min-h-screen bg-[url('/src/assets/hmmm.jpg')] bg-cover bg-center bg-fixed`}
        className="relative h-screen bg-logo-bg"
      >
        {/* <div className="absolute bg-black/40 inset-0 z-0" /> */}
        <section className="z-10 text-custom-black">
          <div className="text-center mb-12 container max-w-7xl mx-auto space-y-4 text-custom-black">
            <h3 className="text-3xl ">The History</h3>
            <p className="text-base text-gray-600">
              The Janaki Temple is a Hindu temple in Janakpur, Nepal, dedicated
              to the Hindu goddess Sita. It is an example of mixed Islam and
              Hindu Nepali architecture. It is often considered the most
              important model of Mughal architecture in Nepal. The Mandir
              (Temple) is popularly known as the Nau Lakha Mandir (meaning "nine
              lakhs"). The cost for the construction of the temple was about the
              same amount of money: rupees nine lakhs or nine hundred thousand,
              hence the name. Queen Vrisha Bhanu of Tikamgarh built the temple
              in 1910 AD. The site was designated as a UNESCO tentative site in
              2008.
            </p>
            <p className="text-base text-gray-600">
              This important Hindu pilgrimage spot is one of the most visited
              spots in Nepal and attracts thousands of Hindu pilgrims from India
              and across the world due to its religious importance. The temple
              is even more resplendent on religious feats and special occasions
              Ram Nawami, Vivaha Panchami, Dashain and Tihar when people flock
              here in even greater number.
            </p>
            <p className="text-base text-gray-600">
              In the shadow of this magnificent temple complex and along the
              banks of the lakes Hotel Mithila a 3-star spiritual theme hotel
              came into existence to offer the finest hospitality and an
              experience of a lifetime.
            </p>
          </div>
        </section>
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/texture.avif')] bg-cover bg-center bg-no-repeat z-0 mix-blend-darken opacity-50`}
        />
        <div
          className={`absolute bottom-0 h-96 w-full bg-[url('/src/assets/sketch.webp')] bg-contain bg-bottom bg-repeat-x z-0 mix-blend-multiply`}
        />
      </div>
    </>
  );
};

export default History;
