// import React, { useState } from "react";
// import { IoMdCloseCircle, IoMdCheckmarkCircle, IoMdSync } from "react-icons/io";

// const ContactForm = ({ contactFormFields }) => {
//   const [formData, setFormData] = useState(
//     contactFormFields.reduce((acc, field) => {
//       acc[field.id] = "";
//       return acc;
//     }, {})
//   );
//   const [formStatus, setFormStatus] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Validate form data
//       const isValid = validateForm(formData);
//       if (!isValid) {
//         // Display error message if form data is invalid
//         setFormStatus("error");
//         setTimeout(() => setFormStatus(null), 3000); // Clear error after 3 seconds
//         return;
//       }

//       // Form data is valid, proceed with form submission
//       setFormStatus("loading");
//       const response = await fetch(
//         "https://mithilayatriniwas.com/enquery_mail_react.php",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       if (response.ok) {
//         const data = await response.json();
//         console.log("Success:", data);
//         // Display success message
//         setFormStatus("success");
//         setTimeout(() => setFormStatus(null), 3000); // Clear success after 3 seconds
//       } else {
//         console.error("Error:", response.statusText);
//         // Display error message
//         setFormStatus("error");
//         setTimeout(() => setFormStatus(null), 3000); // Clear error after 3 seconds
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       // Display error message
//       setFormStatus("error");
//       setTimeout(() => setFormStatus(null), 3000); // Clear error after 3 seconds
//     }
//   };

//   // Function to validate form data
//   const validateForm = (formData) => {
//     // Example validation: Ensure all fields are not empty
//     for (const key in formData) {
//       if (formData[key].trim() === "") {
//         return false;
//       }
//     }
//     return true;
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="grid sm:grid-cols-2 gap-8">
//           {contactFormFields.map((field) => (
//             <div
//               key={field.id}
//               className="relative z-0 flex items-center justify-between group"
//             >
//               <input
//                 type={field.type}
//                 name={field.id}
//                 value={formData[field.id]}
//                 onChange={handleChange}
//                 className="block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none"
//                 placeholder=""
//                 required={field.id !== "message"}
//               />
//               <label
//                 htmlFor={field.id}
//                 className="absolute text-sm text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-logo-clr peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//               >
//                 {field.label}
//               </label>
//               {typeof field.icon === "function" ? (
//                 <span className="absolute right-3 text-gray-600">
//                   <field.icon />
//                 </span>
//               ) : (
//                 <img
//                   src={field.icon}
//                   alt={field.id}
//                   className="absolute right-3 w-8 h-8 p-1"
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="mt-16 flex items-center justify-center">
//           <button
//             type="submit"
//             className="bg-alt-logo-clr text-white py-2 px-4 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       {/* Render form status message */}
//       {formStatus && (
//         <div
//           className={`${
//             formStatus === "success"
//               ? "bg-green-200 text-green-700"
//               : formStatus === "error"
//               ? "bg-red-200 text-red-700"
//               : "bg-yellow-100 text-yellow-700"
//           } font-bold max-w-sm mx-auto fixed top-16 left-4 right-4 p-4 rounded-md shadow-lg flex items-center gap-4 z-[99] transition-opacity duration-300 ease-in-out transform ${
//             formStatus ? "scale-100" : "scale-0"
//           }`}
//         >
//           {formStatus === "success" && <IoMdCheckmarkCircle />}
//           {formStatus === "error" && <IoMdCloseCircle />}
//           {formStatus === "loading" && <IoMdSync className="animate-spin" />}
//           {formStatus === "success"
//             ? " Your message has been sent successfully!"
//             : formStatus === "error"
//             ? "Unable to send message. Please try again."
//             : "Loading..."}
//         </div>
//       )}
//     </>
//   );
// };

// export default ContactForm;

import React, { useState } from "react";
import { IoMdCloseCircle, IoMdCheckmarkCircle, IoMdSync } from "react-icons/io";

const ContactForm = ({ contactFormFields }) => {
  const [formData, setFormData] = useState(
    contactFormFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );
  const [formStatus, setFormStatus] = useState(null);
  const [isHuman, setIsHuman] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setIsHuman(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form data
    const isValid = validateForm(formData);
    if (!isValid || !isHuman) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
      return;
    }

    try {
      setFormStatus("loading");
      const response = await fetch(
        "https://mithilayatriniwas.com/enquery_mail_react.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
        setFormStatus("success");
        setTimeout(() => setFormStatus(null), 3000);
      } else {
        console.error("Error:", response.statusText);
        setFormStatus("error");
        setTimeout(() => setFormStatus(null), 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("error");
      setTimeout(() => setFormStatus(null), 3000);
    }
  };

  const validateForm = (formData) => {
    for (const key in formData) {
      if (formData[key].trim() === "") {
        return false;
      }
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-8">
          {contactFormFields.map((field) => (
            <div
              key={field.id}
              className="relative z-0 flex items-center justify-between group"
            >
              <input
                type={field.type}
                name={field.id}
                value={formData[field.id]}
                onChange={handleChange}
                className="block px-0 py-3 w-full text-gray-900 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-logo-clr peer rounded-none"
                placeholder=""
                required={field.id !== "message"}
              />
              <label
                htmlFor={field.id}
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

        <div className="mt-16 flex items-center justify-between gap-8">
          <div className="captcha flex items-center gap-4">
            <div>
              <input
                type="checkbox"
                id="cbx"
                className="hidden"
                checked={isHuman}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="cbx" className="check">
                <svg className="size-8" viewBox="0 0 18 18">
                  <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z" />
                  <polyline points="1 9 7 14 15 4" />
                </svg>
              </label>
            </div>
            <span className="select-none pointer-events-none">
              I am not a robot.
            </span>
          </div>
          {/* <div className="mt-8 flex items-center gap-4">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                type="checkbox"
                checked={isHuman}
                onChange={handleCheckboxChange}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              I am not a robot
            </label>
          </div> */}
          <button
            type="submit"
            className="bg-alt-logo-clr text-white py-2 px-6 rounded-full hover:bg-opacity-80 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </div>
      </form>
      {formStatus && (
        <div
          className={`${
            formStatus === "success"
              ? "bg-green-200 text-green-700"
              : formStatus === "error"
              ? "bg-red-200 text-red-700"
              : "bg-yellow-100 text-yellow-700"
          } font-bold max-w-sm mx-auto fixed top-16 left-4 right-4 p-4 rounded-md shadow-lg flex items-center gap-4 z-[99] transition-opacity duration-300 ease-in-out transform ${
            formStatus ? "scale-100" : "scale-0"
          }`}
        >
          {formStatus === "success" && <IoMdCheckmarkCircle />}
          {formStatus === "error" && <IoMdCloseCircle />}
          {formStatus === "loading" && <IoMdSync className="animate-spin" />}
          {formStatus === "success"
            ? " Your message has been sent successfully!"
            : formStatus === "error"
            ? "Please fill up the required fields correctly and verify you are not a robot."
            : "Loading..."}
        </div>
      )}
    </>
  );
};

export default ContactForm;
