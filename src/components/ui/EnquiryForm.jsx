import React from "react";
import { FiUser } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { TbPhone } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { TbPencilQuestion } from "react-icons/tb";
import { TbCalendarEvent } from "react-icons/tb";
import Button from "./Button";

const EnquiryForm = () => {
  const formFields = [
    {
      id: "event",
      type: "text",
      label: "Event Title",
      icon: <TbCalendarEvent />,
    },
    { id: "event-date", type: "date", label: "Event Date", icon: "" },
    { id: "name", type: "text", label: "Full Name", icon: <FiUser /> },
    {
      id: "email",
      type: "email",
      label: "Email address",
      icon: <MdAlternateEmail />,
    },
    { id: "phone", type: "tel", label: "Phone Number", icon: <TbPhone /> },
    { id: "address", type: "text", label: "Address", icon: <GrLocation /> },
    {
      id: "subject",
      type: "text",
      label: "Subject",
      icon: <TbPencilQuestion />,
    },
    {
      id: "message",
      type: "textarea",
      label: "Message",
      icon: <HiOutlineMail />,
    },
  ];
  return (
    <>
      <section id="enquiry-form" className="-mt-36">
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
            {formFields.map((field) => (
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
                {field.icon && (
                  <span className="absolute right-1 text-xl text-custom-black/70">
                    {field.icon}
                  </span>
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
