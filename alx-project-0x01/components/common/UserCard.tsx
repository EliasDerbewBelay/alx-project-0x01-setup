import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-500">@{user.username}</p>

      <div className="mt-2 text-sm text-gray-600">
        <p>
          Email: <a href={`mailto:${user.email}`}>{user.email}</a>
        </p>
        <p>Phone: {user.phone}</p>
        <p>
          Website:{" "}
          <a href={`https://${user.website}`} target="_black" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-semibold">Company:</p>
        <p>{user.company.name}</p>
        <p>{user.company.catchPhrase}</p>
      </div>

      <div className="mt-3 text-sm">
        <p className="font-semibold">Address:</p>
        <p>
          {user.address.suite}, {user.address.street},
        </p>
        <p>
          {user.address.city} {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
