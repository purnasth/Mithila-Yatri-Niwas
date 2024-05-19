import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Hmm = () => {
  const [verified, setVerified] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  return (
    <div className="py-32 mb-32">
      <form className="ml-auo space-y-4 max-w-lg mx-auto">
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
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" onChange={onChange} />,
        <button
          type="submit"
          className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full"
          disabled={!verified}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Hmm;
