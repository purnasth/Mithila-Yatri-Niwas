import React from "react";

const PackageContent = ({ room }) => {
  return (
    <>
      <div className="">
        <h3 className="text-3xl text-custom-black">{room.title}</h3>
        <p className="text-base text-gray-600 mt-4 text-justify">
          {room.description}
        </p>
        <hr className="border-custom-black/20 mt-4" />

        <h5 className="text-3xl text-custom-black mt-12 mb-6">Informations</h5>
        <ul>
          {room.informations &&
            Object.entries(room.informations).map(([infoKey, infoValue]) => (
              <li
                key={infoKey}
                className="flex items-left justify-left flex-col py-2"
              >
                <span className="flex items-center gap-2 text-gray-600">
                  {typeof infoValue.icon === "function" ? (
                    <infoValue.icon className="text-xl mr-2" />
                  ) : (
                    <img
                      src={infoValue.icon}
                      alt={infoKey}
                      className="w-12 h-12 mb-2"
                    />
                  )}
                  {/* {infoKey}: {infoValue.value} */}
                  <span className="font-bold">{infoKey}: </span>
                  {infoValue.value}
                </span>
              </li>
            ))}
        </ul>

        <hr className="border-custom-black/20 mt-4" />

        {room.facilities.map((facilityCategory) => (
          <div key={facilityCategory.title}>
            <h5 className="text-3xl leading-loose mt-12 mb-6">
              {facilityCategory.title}
            </h5>
            <ul className="list-decimal ml-4">
              {facilityCategory.content.map((policy) => (
                <li key={policy} className="mb-2 text-gray-600">
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <hr className="border-custom-black/20 mt-4" />

        {room.policies.map((policyCategory) => (
          <div key={policyCategory.title}>
            <h5 className="text-3xl leading-loose mt-12 mb-6">
              {policyCategory.title}
            </h5>
            <ul className="list-decimal ml-4">
              {policyCategory.content.map((policy) => (
                <li key={policy} className="mb-2 text-gray-600">
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* <hr className="border-custom-black/20 mt-4" /> */}
      </div>
    </>
  );
};

export default PackageContent;
