import React from "react";

function ContactCard({ contact }) {
  const { picture, name, email, phone, location } = contact;
  return (
    <>
      <figure className="bg-gray-800 h-80 md:mt-16 rounded-lg shadow-lg pt-7">
        <img
          src={picture.large}
          alt="user avatar"
          className="h-32 w-32 mx-auto rounded-full"
        />
        <figcaption className="text-center mt-5">
          <p className="text-gray-200 font-semibold text-xl mb-2">
            {name.title} {name.first} {name.last}
          </p>
          <p className=" text-gray-300">
            <span className="font-medium">Email: </span>
            {email}
          </p>
          <p className="text-gray-300">
            <span className="font-medium">Phone: </span>
            {phone}
          </p>
          <p className="text-gray-300">
            <span className="font-medium">City:</span>
            {location.city}
          </p>
        </figcaption>
      </figure>
    </>
  );
}

export default ContactCard;
