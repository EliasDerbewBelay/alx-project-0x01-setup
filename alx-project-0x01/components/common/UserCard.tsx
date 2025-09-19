import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>

      <div className="mt-2 text-sm text-gray-600">
        <p>
          Email:{" "}
          <a href={`mailto:${email}`} className="text-blue-600">
            {email}
          </a>
        </p>
        <p>Phone: {phone}</p>
        <p>
          Website:{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            {website}
          </a>
        </p>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-semibold">Company:</p>
        <p>{company.name}</p>
        <p className="italic text-gray-500">{company.catchPhrase}</p>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-semibold">Address:</p>
        <p>
          {address.suite}, {address.street},
        </p>
        <p>
          {address.city} {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
