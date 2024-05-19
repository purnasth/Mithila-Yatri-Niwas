import React from "react";
import Button from "./Button";

const ContactForm = ({ contactFormFields }) => {
  return (
    <>
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
    </>
  );
};

export default ContactForm;
