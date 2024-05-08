import React from "react";
import { enquiryFormFields, Button } from "../../constants/data";

const EnquiryForm = () => {
  return (
    <>
      <section id="enquiry-form" className="-mt-36 bg-alt-bg">
        <div
          className={`absolute inset-0 h-full w-full bg-[url('/src/assets/graphics/pattern-mandala.avif')] bg-repeat -z-10 mix-blend-multiply opacity-30`}
        />
        <div className="text-center mb-16 container max-w-lg mx-auto">
          <h2 className="text-3xl">Make a Reservation</h2>
          <p className="text-base text-gray-500 mt-4">
            Can't find the contact and information you're looking for? If you
            have any queries or would like to make a reservation, please don't
            hesitate to contact us.
          </p>
        </div>
        <form className="container max-w-3xl mt-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {enquiryFormFields.map((field) => (
              <div
                key={field.id}
                className="relative z-0 flex items-center justify-between group"
              >
                <input
                  type={field.type}
                  name={`floating_${field.id}`}
                  className="text-xl block px-0 py-3 w-full text-custom-black bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer"
                  placeholder=""
                  required={field.id !== "message"}
                />
                <label
                  htmlFor={`floating_${field.id}`}
                  className="absolute text-base text-custom-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {field.label}
                </label>
                {typeof field.icon === "function" ? (
                  <span className="absolute right-0 text-custom-black/90 text-xl p-1 bg-alt-bg pointer-events-none">
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
      </section>
    </>
  );
};

export default EnquiryForm;
