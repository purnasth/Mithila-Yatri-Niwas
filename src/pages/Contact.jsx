import React from "react";
import {
  contactFormFields,
  Banner,
  Direction,
  Socials,
  SvgWave,
  LocationDetails,
  Button,
  mithilaNight,
} from "../constants/data";

const Contact = () => {
  return (
    <>
      <Banner banner={mithilaNight} page="Contact" />

      {/* <section className="bg-alt-bg">
        <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl bg-alt-logo-clr shadow-lg rounded-md text-custom-white">
          <div>
            <h3 className="text-3xl font-extrabold">Contact Form</h3>
            <p className="text-sm text-gray-400 mt-3">
              Can't find the contact and information you're looking for? Write
              to us via this quick form.
            </p>

            <ul className="mt-12 flex flex-col gap-4">
              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <GrLocation className="text-xl" />
                <a href="#" target="_blank" rel="noopener">
                  Dasrath Talau, Janakpur Dham, Dhanusha
                </a>
              </li>

              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <TbPhone className="text-xl" />
                <a href="tel:+97714229996" target="_blank" rel="noopener">
                  +977-14229996
                </a>
              </li>
              <li className="flex items-center justify-start gap-2 text-custom-white hover:scale-105 hover:text-white transition-linear">
                <HiOutlineMail className="text-xl" />
                <a
                  href="mailto:info@hotelmithilanepal.com"
                  target="_blank"
                  rel="noopener"
                >
                  info@hotelmithilanepal.com
                </a>
              </li>
            </ul>

            <div className="mt-12">
              <Socials />
            </div>
          </div>
          <form className="ml-auo space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#007bff]"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"
              defaultValue={""}
            />
            <button
              type="button"
              className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
            >
              Send
            </button>
          </form>
        </div>
      </section> */}

      <Direction />

      <section className="bg-logo-bg">
        <SvgWave />
        <div className="text-center mb-24 container max-w-5xl mx-auto">
          <h2 className="text-3xl">Contact Form</h2>
          <p className="text-base text-gray-600 mt-4">
            Connect with ease using our Contact Form. A simple, direct line for
            your inquiries and feedback. Quick, responsive, and always here to
            listen.
          </p>
        </div>
        <div className="container relative scroll-mt-32">
          <div className="grid lg:grid-cols-3 items-center gap-4 p-2 shadow-lg rounded-xl mt-8 bg-custom-white">
            <div className="bg-[#011c2b] rounded-xl max-lg:text-center px-6 py-12 relative z-10">
              <img
                src={mithilaNight}
                alt="Mithila Yatri Niwas"
                className="w-full h-full absolute inset-0 object-cover -z-10 rounded-xl"
              />
              <div className="w-full h-full absolute inset-0 -z-10 bg-black/80 rounded-xl" />
              <h2 className="text-xl font-bold text-white">
                Mithila Yatri Niwas
              </h2>
              <p className="text-sm text-pretty text-gray-300 mt-3">
                Mithila Yatri Niwas a luxurious hotel property in Janakpur. Our
                Hotel is conveniently located,which allows a hassle free easy
                access by road, domestic airport and railway connectivity to
                Indian border.
              </p>

              <div className="my-6">
                <LocationDetails alignClassName="justify-center lg:justify-start" />
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start">
                <Socials />
              </div>
            </div>

            <div className="p-6 rounded-xl lg:col-span-2" id="contact-form">
              <form>
                <div className="grid sm:grid-cols-2 gap-8">
                  {contactFormFields.map((field) => (
                    <div
                      key={field.id}
                      className="relative z-0 flex items-center justify-between group"
                    >
                      <input
                        type={field.type}
                        name={`floating_${field.id}`}
                        className="block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none "
                        placeholder=""
                        required={field.id !== "message"}
                      />
                      <label
                        htmlFor={`floating_${field.id}`}
                        className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        {field.label}
                      </label>
                      {typeof field.icon === "function" ? (
                        <span className="absolute right-3 text-gray-600">
                          <field.icon />
                        </span>
                      ) : (
                        <img
                          src={field.icon}
                          alt={field.id}
                          className="absolute right-3 w-8 h-8 p-1"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-16 flex items-center justify-center">
                  <Button title="Submit" router="#" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
