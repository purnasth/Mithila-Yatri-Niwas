import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ contactFormFields }) => {
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [formData, setFormData] = useState(
    contactFormFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );
  const [formErrors, setFormErrors] = useState({});

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleInputChange = (e, id) => {
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    contactFormFields.forEach((field) => {
      if (!formData[field.id] && field.id !== "message") {
        errors[field.id] = `${field.label} is required`;
      }
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // Form submission logic here
    console.log("Form submitted", formData);

    // Reset form
    setFormData(contactFormFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {}));
    setRecaptchaToken(null);
    setFormErrors({});
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          {contactFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex flex-col group"
            >
              <input
                type={field.type}
                name={`floating_${field.id}`}
                value={formData[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                className={`block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none ${
                  formErrors[field.id] ? "border-red-500" : ""
                }`}
                placeholder=""
                required={field.id !== "message"}
              />
              <label
                htmlFor={`floating_${field.id}`}
                className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                {field.label}
              </label>
              {formErrors[field.id] && (
                <span className="text-red-600 text-sm mt-1">
                  {formErrors[field.id]}
                </span>
              )}
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
        <div className="mt-8 flex items-center justify-between flex-col md:flex-row gap-12">
          <ReCAPTCHA
            sitekey="6LcsfeEpAAAAAEq9Yyl0jxseAXX3rAO0LGIc2_Qu"
            onChange={handleRecaptchaChange}
          />
          <button
            type="submit"
            className="bg-alt-logo-clr text-white font-semibold rounded-full text-sm px-8 py-3 w-full md:w-auto hover:bg-logo-clr transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
