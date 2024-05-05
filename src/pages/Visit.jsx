import React from "react";
import Direction from "../components/Direction";

const Visit = () => {
  const offersContents = [
    {
      id: "janaki",
      title: "Janaki Mandir",
      description:
        "Dedicated to Goddess Sita, Janaki Mandir is the biggest temple in Nepal located in Janakpur. It is constructed at the place where Goddess Sita was born. The attraction is now considered as a religiously important monument and a heritage site but is still an active temple for devotees. Anybody seeking a slice of the legend of Ramayana must visit the divine Janaki Temple. <br/> The Janaki Mandir is an examplar of Hindu-Koiri Nepali architecture having a stunning white facade. The 3 storied temple is built entirely of stones and marbles, while the 60 rooms inside are adorned with Nepali flag, engravings, paintings, beautiful lattice windows and turrets. The Janaki temple is predominantly thronged by devotees during auspicious occasions and festivals like the Ram Navami, Vivah Panchami, Dashain, Deepavali, and Holi. Pilgrims come in from all around Nepal, Sri Lanka and India to worship the Goddess who is deemed an epitome of courage, purity, selflessness, dedication, loyalty and feminine virtues.",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Janaki_Temple,_Dhanusha_20181001160947.jpg",
    },
    {
      id: "ram-mandir",
      title: "Ram Mandir, Janakpur",
      description:
        "Ram Mandir is one of the oldest temples in Janakpur built in the late 1700s by Amar Singh Thapa, a Gorkhali General. The architecture of the temple is traditional pagoda-style like the other shrines in the region. The modestly quaint temple is flocked by pilgrims during the occasion of Ram Navami and Dashain which are sacred and important annual festivals dedicated to Lord Rama. The opulent temple is a perfect attraction for those interested in exploring ancient cultures and experiencing its divine vibe. <br/> The temple is a beautiful structure with a white facade and a golden pinnacle. The temple is dedicated to Lord Rama and is a popular pilgrimage site for Hindus. The temple is a part of the Ramayana Circuit and is visited by thousands of devotees every year. The temple is a must-visit for those interested in exploring the rich culture and heritage of Nepal.",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Ram_Mandir,_Janakpur-September_22,_2016-IMG_7648_20181001175901_20181001175919.jpg",
    },
    {
      id: "rolwaling-valley",
      title: "Rolwaling Valley",
      description:
        "Rolwaling Valley, between the Everest and Langtang Himalaya ranges, is the toughest and most thrilling trekking trail in Nepal. The valley has an abundance of alpine lakes, hanging glaciers, moraines, high pastures, waterfalls and imminent view of snowy peaks. Rich in varying flora and fauna, it is home to many endangered and globally threatened animals.",
      icon: "https://www.holidify.com/images/foreign/compressed/attr_123742.jpg",
    },
    {
      id: "ram-sita-vivah-mandap",
      title: "Ram Sita Vivah Mandap",
      description:
        "The place where Ram and Sita got married, Ram Janaki Vivah Mandap is visited by thousands of pilgrims to pay homage to Sita at the time of Vivah Panchami. The marriage day of Sita and Ram usually celebrated on the fifth day of the Shukla Paksha or waxing phase of moon in November/December. The mandap is a gorgeous structure made of marble located in the southwest region of the Janaki Mandir. It resembles a part of a palace with sturdy pillars, elegant arches and stunning domes. <br/> At the centre of the mandap, the legendary wedding ceremony is depicted. One can see idols of the couple, Goddess Sita and Lord Rama, sitting on a raised pedestal in the centre while some sages and their parents are seen seated on parallel pedestals facing each other. The idols are draped in colourful attires and give a sense of the ancient royal celebration. Devotees can offer their prayers and sit in complete silence to soak in the tranquil vibe of the temple. Those interested in getting a sneak peek into this epic union must visit the Ram Sita Vivah Mandap.",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Vivah_Mandap,_Janakpur-September_22,_2016-IMG_7419_20181001182754_20181001182810.jpg",
    },
    {
      id: "jaleshwar",
      title: "Jaleshwar",
      description:
        "Jaleswar is a small municipality in Nepal, named after the holy temple of Jaleshwarnath Mahadev, dedicated to Lord Shiva. The small-town borders India with Bihar. During the months of Shravan that is July and August, devotees from all over the world flock here to pay their respects to the Lord and his Consort, Parvati. From historical sites and cultural attractions to parks and beaches, the city has something to offer to all its visitors. <br/> Since Jaleshwar revolves only around the Jaleshwarnath Temple, the transport facilities withing the temple are also quite functional and comprehensive. Visiting the temple is a hassle-free experience as the buses also go to big cities like Kathmandu and Birgunj and connect to the main Janakpur city regularly. There are also many small eateries in the town and vegetarian restaurants are a majority in this little temple town. ",
      icon: "https://www.holidify.com/images/cmsuploads/compressed/Jaleshwar1_20191021123356_20191021123418.jpg",
    },
  ];
  return (
    <>
      <section className="bg-logo-bg -mt-36">
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-20`}
        />
        <div className="container">
          <div className="text-center my-16 max-w-5xl mx-auto">
            <h2 className="text-3xl">Places To Visit</h2>
            <p className="text-base text-gray-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              pariatur odit reiciendis quae quod, accusamus quos, consectetur
              ipsum cum excepturi rem ea labore perspiciatis animi qui nesciunt
              a deserunt voluptas alias aliquam vero expedita enim ab assumenda!
              Beatae, mollitia qui unde temporibus dolorum architecto maiores,
              ut corrupti nemo facilis quos?
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 pt-8">
            {offersContents.map((offer, index) => (
              <div
                key={offer.id}
                id={offer.id}
                className={`flex items-center justify-center gap-16 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1">
                  <img
                    src={offer.icon}
                    alt={offer.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="flex-1 px-4 h-80 overflow-y-auto">
                  <h3 className="text-xl font-medium mb-2 sticky top-0 pt-4 pb-2 bg-logo-bg">
                    {offer.title}
                  </h3>
                  {offer.description.split("<br/>").map((paragraph, index) => (
                    <p key={index} className="text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Direction />
    </>
  );
};

export default Visit;
