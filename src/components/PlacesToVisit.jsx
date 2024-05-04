import React from "react";
import PlacesToVisitSlider from "./ui/PlacesToVisitSlider";
import SvgWave from "./ui/SvgWave";

const PlacesToVisit = () => {
  const offersContents = [
    {
      id: 1,
      title: "Janaki Mandir",
      description:
        "Dedicated to Goddess Sita, Janaki Mandir is the biggest temple in Nepal located in Janakpur. It is constructed at the place where Goddess Sita was born. The attraction is now considered as a religiously important monument and a heritage site but is still an active temple for devotees. Anybody seeking a slice of the legend of Ramayana must visit the divine Janaki Temple. ",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Janaki_Temple,_Dhanusha_20181001160947.jpg",
    },
    {
      id: 2,
      title: "Ram Mandir, Janakpur",
      description:
        "Ram Mandir is one of the oldest temples in Janakpur built in the late 1700s by Amar Singh Thapa, a Gorkhali General. The architecture of the temple is traditional pagoda-style like the other shrines in the region. The modestly quaint temple is flocked by pilgrims during the occasion of Ram Navami and Dashain which are sacred and important annual festivals dedicated to Lord Rama. The opulent temple is a perfect attraction for those interested in exploring ancient cultures and experiencing its divine vibe.",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Mandir,_Janakpur-September_22,_2016-IMG_7648_20181001175901_20181001175919.jpg",
    },
    {
      id: 3,
      title: "Rolwaling Valley",
      description:
        "Rolwaling Valley, between the Everest and Langtang Himalaya ranges, is the toughest and most thrilling trekking trail in Nepal. The valley has an abundance of alpine lakes, hanging glaciers, moraines, high pastures, waterfalls and imminent view of snowy peaks. Rich in varying flora and fauna, it is home to many endangered and globally threatened animals.",
      icon: "https://www.holidify.com/images/foreign/compressed/attr_123742.jpg",
    },
    {
      id: 4,
      title: "Ram Sita Vivah Mandap",
      description:
        "The place where Ram and Sita got married, Ram Janaki Vivah Mandap is visited by thousands of pilgrims to pay homage to Sita at the time of Vivah Panchami. The marriage day of Sita and Ram usually celebrated on the fifth day of the Shukla Paksha or waxing phase of moon in November/December. The mandap is a gorgeous structure made of marble located in the southwest region of the Janaki Mandir. It resembles a part of a palace with sturdy pillars, elegant arches and stunning domes. <br/> At the centre of the mandap, the legendary wedding ceremony is depicted. One can see idols of the couple, Goddess Sita and Lord Rama, sitting on a raised pedestal in the centre while some sages and their parents are seen seated on parallel pedestals facing each other. The idols are draped in colourful attires and give a sense of the ancient royal celebration. Devotees can offer their prayers and sit in complete silence to soak in the tranquil vibe of the temple. Those interested in getting a sneak peek into this epic union must visit the Ram Sita Vivah Mandap.",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Vivah_Mandap,_Janakpur-September_22,_2016-IMG_7419_20181001182754_20181001182810.jpg",
    },
    {
      id: 5,
      title: "Jaleshwar",
      description:
        "Jaleswar is a small municipality in Nepal, named after the holy temple of Jaleshwarnath Mahadev, dedicated to Lord Shiva. The small-town borders India with Bihar. During the months of Shravan that is July and August, devotees from all over the world flock here to pay their respects to the Lord and his Consort, Parvati. From historical sites and cultural attractions to parks and beaches, the city has something to offer to all its visitors. <br/> Since Jaleshwar revolves only around the Jaleshwarnath Temple, the transport facilities withing the temple are also quite functional and comprehensive. Visiting the temple is a hassle-free experience as the buses also go to big cities like Kathmandu and Birgunj and connect to the main Janakpur city regularly. There are also many small eateries in the town and vegetarian restaurants are a majority in this little temple town. ",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Jaleshwar1_20191021123356_20191021123418.jpg",
    },
  ];

  return (
    <>
      {/* <section className="bg-gradient-to-b from-logo-bg to-alt-bg px-10"> */}
      <section className="bg-alt-bg px-10">
        <SvgWave />
        <div className="absolute left-0 bottom-0 w-full h-16 bg-[url('/src/assets/logo-graphics.svg')] bg-contain bg-repeat-x mix-blend-luminosity opacity-80 -z-20" />
        <div className="text-center mb-12 container max-w-6xl mx-auto">
          <h2 className="text-3xl text-primary">Places to Visit</h2>
          <p className="text-base text-gray-500 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            pariatur odit reiciendis quae quod, accusamus quos, consectetur
            ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt a
            deserunt voluptas alias aliquam vero expedita enim ab assumenda!
            Beatae, mollitia qui unde temporibus dolorum architecto maiores, ut
            corrupti nemo facilis quos?
          </p>
          {/* <LearnMore
              text="Explore"
              primaryColor="bg-logo-clr"
              secondaryColor="bg-alt-logo-clr"
            /> */}
        </div>
        <div className="">
          <PlacesToVisitSlider contents={offersContents} router="#" />
        </div>
      </section>
    </>
  );
};

export default PlacesToVisit;
